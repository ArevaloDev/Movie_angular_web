import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { Movie, Movies, ResponseMovies } from '../interfaces/movies.interface';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

const FAVORITES_KEY = 'favorites_movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public url: string = environment.tmdbBaseUrl;
  public searchResultSubject = new BehaviorSubject<Movies[]>([]);
  public searchResult$ = this.searchResultSubject.asObservable();
  public favoritesSubject = new BehaviorSubject<Movie[]>(this.loadFavorites());
  public favoritesSubject$ = this.favoritesSubject.asObservable();
  constructor(private http: HttpClient) {}

  clearSearch(): void {
    this.searchResultSubject.next([]);
  }

  getPopularMovies = (page: number): Observable<ResponseMovies> => {
    return this.http.get<ResponseMovies>(
      `${this.url}/movie/popular?page=${page}`
    );
  };

  getMovieById = (id: number): Observable<Movie> => {
    return this.http.get<Movie>(`${this.url}/movie/${id}`).pipe(
      map((item) => ({
        ...item,
        vote_average: parseFloat(item.vote_average.toFixed(1)),
      }))
    );
  };

  searchMovies = (query: string): void => {
    this.http
      .get<ResponseMovies>(`${this.url}/search/movie?query=${query}`)
      .pipe(map((res) => res.results || []),
      catchError(() => of([]))
    )
      .subscribe((movies) => this.searchResultSubject.next(movies));
  };

  private loadFavorites(): Movie[] {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveFavorites = (movies: Movie[]): void => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(movies));
  };
  getFavorites = ():Movie[] => {
    return this.favoritesSubject.getValue();
  };

  addToFavorites = (movie: Movie):void => {
    const current = this.getFavorites();
    if (!current.find((m) => m.id === movie.id)) {
      const updated = [...current, movie];
      this.saveFavorites(updated);
      this.favoritesSubject.next(updated);
    }
  };

  removeFromFavorites(movieId: number): void {
    const updated = this.getFavorites().filter((m) => m.id !== movieId);
    this.saveFavorites(updated);
    this.favoritesSubject.next(updated);
  }

  isFavorite(id: number): boolean {
    return this.getFavorites().some((m) => m.id === id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { Movie, Movies, ResponseMovies } from '../interfaces/movies.interface';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public url:string = environment.tmdbBaseUrl;
  public searchResultSubject = new BehaviorSubject<Movies[]>([]);
  public searchjResult$ = this.searchResultSubject.asObservable();
  constructor(private http:HttpClient) { }

  getPopularMovies = (page:number):Observable<ResponseMovies> => {
    return this.http.get<ResponseMovies>(`${this.url}/movie/popular?page=${page}`);
  }

  getMovieById = (id:number):Observable<Movie> => {
    return this.http.get<Movie>(`${this.url}/movie/${id}`).pipe(
      map(item => ({
        ...item,
        vote_average: parseFloat(item.vote_average.toFixed(1))
      }))
    )
  }

  searchMovies = (query:string):void => {
     this.http.get<ResponseMovies>(`${this.url}/search/movie?query=${query}`).pipe(
      map((res) => res.results as Movies[])
    ).subscribe((movies) => this.searchResultSubject.next(movies))
  }
}

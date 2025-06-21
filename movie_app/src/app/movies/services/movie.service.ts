import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { Movie, ResponseMovies } from '../interfaces/movies.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  public url:string = environment.tmdbBaseUrl;
  constructor(private http:HttpClient) { }

  getPopularMovies = (page:number):Observable<ResponseMovies> => {
    return this.http.get<ResponseMovies>(`${this.url}/popular?page=${page}`);
  }

  getMovieById = (id:number):Observable<Movie> => {
    return this.http.get<Movie>(`${this.url}/${id}`).pipe(
      map(item => ({
        ...item,
        vote_average: parseFloat(item.vote_average.toFixed(1))
      }))
    )
  }
}

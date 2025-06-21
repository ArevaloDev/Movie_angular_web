import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { ResponseMovies } from '../interfaces/movies.interface';
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
}

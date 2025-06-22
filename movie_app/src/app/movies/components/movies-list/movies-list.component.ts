import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/movies.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent{
  constructor(private router:Router){}
  @Input() popularMovies:Movies[] = [];
    goToDetail = (id: number): void => {
    console.log(id);
    this.router.navigate(['/movies/movie', id]);
  };

}

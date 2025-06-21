import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { Movies } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrl: './popularmovies.component.css',
})
export class PopularmoviesComponent implements OnInit {
  public popularMovies: Movies[] = [];
  public currentPage: number = 1;
  public totalPages: number = 0;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

  loadMovies = (page:number): void => {
    this.movieService.getPopularMovies(page).subscribe((response) => {
      console.log(response);
      this.popularMovies = response.results;
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
    });
  };

  goToPage = (page:number):void => {
      if(page > 0 && page <= this.totalPages){
        this.loadMovies(this.currentPage + 1);
      }
  }

  nextPage = (): void => {
    if ((this.currentPage < this.totalPages)) {
      this.loadMovies(this.currentPage + 1);
    }
  };

  prevPage = ():void => {
    if(this.currentPage > 1){
      this.loadMovies(this.currentPage - 1);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/movies.interface';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public popularMovies: Movies[] = [];
  public currentPage: number = 1;
  public totalPages: number = 0;
  public isLoading:boolean = false;
  constructor(
    private movieService: MovieService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

  loadMovies = (page:number): void => {
    this.isLoading = true;
    this.movieService.getPopularMovies(page).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe((response) => {
      console.log(response);
      this.popularMovies = response.results;
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
    }, (error) => {
      console.log('error ak cargar peliculas', error);

    })
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

  goToDetail = (id:number):void =>  {
    console.log(id);
    this.router.navigate(['/movies/movie', id])
  }

}

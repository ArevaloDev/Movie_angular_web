import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/movies.interface';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public popularMovies: Movies[] = [];
  public currentPage: number = 1;
  public totalPages: number = 0;
  public isLoading: boolean = false;
  private searchSub!: Subscription;
  public errorMessage: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
      this.getPopularMovies();
  }
  ngOnDestroy(): void {
    if(this.searchSub){
      this.searchSub.unsubscribe();
    }
  }

  getPopularMovies = () => {
      this.isLoading = true;
    this.searchSub = this.movieService.searchResult$.subscribe((results) => {
      if (results.length > 0) {
        this.popularMovies = results;
        this.isLoading = false;
      } else {
        this.loadMovies(this.currentPage);
      }
    });
  }

  loadMovies = (page: number): void => {
    this.isLoading = true;
    this.movieService
      .getPopularMovies(page)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        {
          next: (response) => {
            console.log(response);
            this.popularMovies = response.results;
            this.currentPage = response.page;
            this.totalPages = response.total_pages;
          },
          error: () => {
                this.errorMessage = 'Ocurrió un error al cargar las películas. Inténtalo de nuevo más tarde.';
                this.popularMovies = [];
          },
        }
      );
  };

  nextPage = (): void => {
    if (this.currentPage < this.totalPages) {
      this.loadMovies(this.currentPage + 1);
    }
  };

  prevPage = (): void => {
    if (this.currentPage > 1) {
      this.loadMovies(this.currentPage - 1);
    }
  };
}

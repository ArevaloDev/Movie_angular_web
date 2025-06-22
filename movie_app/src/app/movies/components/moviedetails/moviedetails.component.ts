import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { finalize, Observable, of, Subscription, switchMap } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { Movie, Movies } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css',
})
export class MoviedetailsComponent implements OnInit, OnDestroy {
  public movie!: Movie;
  public isLoading: boolean = false;
  public errorMessage: string = '';
  public subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  getMovieDetails = () => {
    this.isLoading = true;
    this.subscription = this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = Number(params.get('id'));
          if (isNaN(id)) {
            return of();
          }
          return this.movieService.getMovieById(id).pipe(
            finalize(() => {
              this.isLoading = false;
            })
          );
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.movie = response;
        },
        error: () => {
          this.errorMessage =
            'Ocurrió un error al cargar las películas. Inténtalo de nuevo más tarde.';
        },
      });
  };


  addToFavorites(): void {
    this.movieService.addFavorties(this.movie);
  }

  removeFromFavorites(): void {
    this.movieService.removeFromFavorites(this.movie.id);
  }

  isFavorite = ():boolean => {
    return this.movieService.isFavorite(this.movie.id);
  }
}

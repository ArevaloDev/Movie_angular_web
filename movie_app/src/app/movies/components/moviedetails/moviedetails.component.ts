import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { finalize, of, switchMap } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css',
})
export class MoviedetailsComponent implements OnInit {
  public movie!: Movie;
  public isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = Number(params.get('id'));
          if (isNaN(id)) {
            console.log('Id invalido');
            return of();
          }
          return this.movieService.getMovieById(id).pipe(
            finalize(() => {
              this.isLoading = false;
            })
          );
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.movie = response;
      });
  }
}

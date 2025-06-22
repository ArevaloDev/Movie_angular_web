import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie, Movies } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-favorities-movies',
  templateUrl: './favorities-movies.component.html',
  styleUrl: './favorities-movies.component.css'
})
export class FavoritiesMoviesComponent implements OnInit {

  public favorites:Movie[] = [];
  constructor(private movieService:MovieService){}

  ngOnInit(): void {
    this.movieService.favoritesSubject$.subscribe(response => {
      console.log(response);
      this.favorites = response;
    })
  }

removeFavorite = (id:number) => {
  this.movieService.removeFromFavorites(id);
}


}

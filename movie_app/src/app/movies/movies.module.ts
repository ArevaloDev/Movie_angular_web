import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PopularmoviesComponent } from './components/popularmovies/popularmovies.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { FavoritiesMoviesComponent } from './components/favorities-movies/favorities-movies.component';



@NgModule({
  declarations: [
    HomeComponent,
    PopularmoviesComponent,
    MoviedetailsComponent,
    FavoritiesMoviesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }

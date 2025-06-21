import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PopularmoviesComponent } from './components/popularmovies/popularmovies.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { FavoritiesMoviesComponent } from './components/favorities-movies/favorities-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PopularmoviesComponent,
    MoviedetailsComponent,
    FavoritiesMoviesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class MoviesModule { }

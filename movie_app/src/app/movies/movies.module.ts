import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { FavoritiesMoviesComponent } from './components/favorities-movies/favorities-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    MoviedetailsComponent,
    FavoritiesMoviesComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class MoviesModule { }

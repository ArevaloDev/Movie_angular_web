import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../../movies/services/movie.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnInit {

  public form!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private movieService:MovieService
  ){
     this.form  = this.fb.group({
        movie: ['']
      })
  }
  ngOnInit(): void {

  }
  searchMovie = () => {
    const value = this.form.get('movie')?.value;
    if(value.length === 0) return;
    this.movieService.searchMovies(value);

  }
}

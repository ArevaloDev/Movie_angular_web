import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../../movies/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnInit {

  public form!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private movieService:MovieService,
    private router:Router
  ){}
  ngOnInit(): void {
         this.form  = this.fb.group({
        movie: ['', Validators.required]
      })
  }
  searchMovie = () => {
    const value = this.form.get('movie')?.value;
    if(value.length === 0) return;
    this.movieService.searchMovies(value);
    this.form.reset();

  }

  goToHome = () => {
    this.router.navigate(['/home']);
    this.movieService.clearSearch();
  }
}

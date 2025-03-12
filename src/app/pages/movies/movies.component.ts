import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiService } from '../../../movie-api.service';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesPage implements OnInit {
  movies: any[] = [];
  constructor(
    public movieApiService: MovieApiService,
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }
  
  getMovies(): void {
    this.movieApiService.getMovies().subscribe((resp: any) => {
        this.movies = resp;
        console.log(this.movies);
        return this.movies;
    });
  }
}

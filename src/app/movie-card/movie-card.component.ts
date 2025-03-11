// src/app/movie-card/movie-card.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../movie-api.service';
import { MATERIAL_IMPORTS } from '../material.imports';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-movie-card',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public movieApiService: MovieApiService,
    public dialogRef: MatDialogRef<MovieCardComponent>,
    public snackBar: MatSnackBar
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
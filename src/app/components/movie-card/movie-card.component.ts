// src/app/movie-card/movie-card.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { MovieApiService } from '../../../movie-api.service';
import { MATERIAL_IMPORTS } from '../../material.imports';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';



@Component({
  selector: 'app-movie-card',
  imports: [MATERIAL_IMPORTS, CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie = {
    _id: '',
    Title: '',
    Description: '',
    Director: {Name:'', Bio: ''},
    ImagePath: '',
    Genre: {Name: '', Description: ''}
  }

  constructor(
    public movieApiService: MovieApiService,
    public dialog: MatDialog
  ){}

  addMovieToFavorites(){
    let user = JSON.parse(localStorage.getItem('user')!)
    let userId = user._id
    this.movieApiService.addFavoriteMovie(userId, this.movie._id).subscribe((resp: any) => {
      alert("movie added to favorites")
    });
  }

  openGenreDialog():void{
    this.dialog.open(GenericDialogComponent, {
      data: {
        title: `Genre: ${this.movie.Genre.Name}`,
        message: this.movie.Genre.Description
      }
    })
  }

  openDirectorDialog():void{
    this.dialog.open(GenericDialogComponent, {
      data: {
        title: `Director: ${this.movie.Director.Name}`,
        message: this.movie.Director.Bio
      }
    })
  }

  openSynopsisDialog():void{
    this.dialog.open(GenericDialogComponent, {
      data: {
        title: "Synopsis",
        message: this.movie.Description
      }
    })
  }
}
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { fetchApiDataService };

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://movie-api-d90y.onrender.com/';
@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  // User login
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
      catchError(this.handleError)
    );
  }
  // Get all movies
  public getMovies(): Observable<any> {
    return this.http.get(apiUrl + 'movies').pipe(
      catchError(this.handleError)
    );
  }
  // Get one movie
  public getMovieByTitle(title: any): Observable<any> {
    return this.http.get(apiUrl + `movies/${title}`).pipe(
      catchError(this.handleError)
    );
  }
  // Get director
  public getDirector(): Observable<any> {
    return this.http.get(apiUrl + 'directors').pipe(
      catchError(this.handleError)
    );
  }
  // Get genre
  public getGenre(): Observable<any> {
    return this.http.get(apiUrl + 'genres').pipe(
      catchError(this.handleError)
    );
  }
  // Get user
  public getUser(): Observable<any> {
    return this.http.get(apiUrl + 'users').pipe(
      catchError(this.handleError)
    );
  }
  // Get favourite movies for a user
  public getFavoriteMovies(userId: any): Observable<any> {
    return this.http.get(apiUrl + `users/${userId}/favorite-movies`).pipe(
      catchError(this.handleError)
    );
  }
  // Add a movie to favourite Movies
  public addFavoriteMovie(userId: any, movie: any): Observable<any> {
    console.log(userId, movie);
    return this.http.post(apiUrl + `users/${userId}/favorite-movies`, movie).pipe(
      catchError(this.handleError)
    );
  }
  // Edit user
  public updateUser(userId: any, user: any): Observable<any> {
    console.log(userId, user);
    return this.http.put(apiUrl + `users/${userId}`, user).pipe(
      catchError(this.handleError)
    );
  }
  // Delete user
  public deleteUser(userId: any, user: any): Observable<any> {
    console.log(userId, user);
    return this.http.delete(apiUrl + `users/${userId}`, user).pipe(
      catchError(this.handleError)
    );
  }
  // Delete a movie from the favorite movies
  public deleteFavoriteMovie(userId: any, movie: any): Observable<any> {
    console.log(userId, movie);
    return this.http.delete(apiUrl + `users/${userId}/favorite-movies`, movie).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
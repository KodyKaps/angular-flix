import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'user-registration', component: UserRegistrationComponent},
    {path: '*', redirectTo: '/login'}
];

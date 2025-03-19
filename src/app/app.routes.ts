import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MoviesPage } from './pages/movies/movies.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const routes: Routes = [
    {path: 'welcome', component: WelcomePageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'movies', component: MoviesPage},
    /** {path: 'user-registration', component: UserRegistrationComponent},*/
    {path: '*', redirectTo: '/login'},
    {path: '', redirectTo:'welcome', pathMatch: 'prefix'}
];

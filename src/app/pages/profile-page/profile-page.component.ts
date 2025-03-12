import { Component, Input, OnInit } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../material.imports';
import { MovieApiService } from '../../../movie-api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  userData = { Username: '', Password: '', Email: '', Birthday: '' };
  userId = ''
  constructor(public movieApiService: MovieApiService, private router: Router){}
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user')!)
    console.log("user from storage", user)
    this.userId = user._id
    this.userData.Username = user.Username;
    this.userData.Email = user.Email;
    this.userData.Birthday = user.Birthday
  }
  
  deleteAccount() {
    this.movieApiService.deleteUser(this.userId).subscribe((resp: any) => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      alert("User deleted successfully")
      this.router.navigate(['/welcome'])
    });
  }
  saveProfileChanges(){
    this.movieApiService.updateUser(this.userId, this.userData).subscribe((resp: any) => {
      alert("User updated successfully")
    });
  }
}

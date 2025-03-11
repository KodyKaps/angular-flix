import { Component, Input } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../material.imports';

@Component({
  selector: 'app-profile-page',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  //input into the component, from the parent, similar to React Props
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };
  deleteAccount() {}
  saveProfileChanges(){}
}

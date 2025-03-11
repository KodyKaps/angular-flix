import { Component, input } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from './material.imports';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, MATERIAL_IMPORTS
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-flix';

}

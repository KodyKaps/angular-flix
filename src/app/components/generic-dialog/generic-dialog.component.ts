import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_IMPORTS } from '../../material.imports';

@Component({
  selector: 'app-generic-dialog',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './generic-dialog.component.html',
  styleUrl: './generic-dialog.component.css'
})

/**Allow dialogs to accept data in the movie card component*/
export class GenericDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}

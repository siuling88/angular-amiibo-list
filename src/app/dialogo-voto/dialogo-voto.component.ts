import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Result } from '../interfaces/lista';

@Component({
  selector: 'app-dialogo-voto',
  templateUrl: './dialogo-voto.component.html',
  styleUrls: ['./dialogo-voto.component.css']
})
export class DialogoVotoComponent {
  array = [1,2,3,4,5];
  constructor(
    public dialogRef: MatDialogRef<DialogoVotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Result
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

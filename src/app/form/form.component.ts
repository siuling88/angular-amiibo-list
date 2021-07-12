import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Amiibo, Result } from '../interfaces/lista';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogoVotoComponent } from '../dialogo-voto/dialogo-voto.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    figura: new FormControl('', Validators.required),
    estrellas: new FormControl('', [Validators.min(1)])
  });

  @Input() lista: Amiibo[];
  figurasFiltradas: Observable<Amiibo[]>;

  constructor(private dialog: MatDialog) {
    this.figurasFiltradas = this.form.controls.figura.valueChanges.pipe(
      startWith(''),
      map((item: string) =>
        item ? this._figurasFiltradas(item) : this.lista.slice()
      )
    );
  }

  private _figurasFiltradas(value: string): Amiibo[] {
    const filterValue = value.toLowerCase();
    return this.lista.filter(item =>
      item.name.toLowerCase().includes(filterValue)
    );
  }

  votar() {
    let nombreFigura = this.form.controls.figura.value;
    let votos = this.form.controls.estrellas.value;
    let figura = this.lista.filter(
      (item: Amiibo) => item.name == this.form.controls.figura.value
    );

    console.log(figura);
    this.openDialog({
      nombre: nombreFigura,
      estrellas: votos,
      imagen: figura[0].image
    });
  }

  openDialog(figuraVotada: Result): void {
    const dialogRef = this.dialog.open(DialogoVotoComponent, {
      width: '500px',
      data: figuraVotada
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  ngOnInit(): void {}
}

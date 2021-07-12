import { Component, OnInit, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';
import { Amiibo } from './interfaces/lista';
import { ListaService } from './services/lista.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lista: Amiibo[] = [];
  experimento: Observable<Amiibo[]> = of([]);
  name = 'Angular ' + VERSION.major;

  constructor(private servicio: ListaService, private dialog: MatDialog) {}

  openDialog(figuraElegida: Amiibo): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: figuraElegida
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  ngOnInit(): void {
    this.lista = [{ name: '', image: '' }];
    this.servicio.getLista().subscribe((data: Amiibo[]) => {
      this.experimento = data['amiibo'].map((item: Amiibo) => {
        return <Amiibo>{ name: item.name, image: item.image };
      });
      this.lista = data['amiibo'];
    });
  }
}

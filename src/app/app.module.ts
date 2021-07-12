import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListaService } from './services/lista.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { EstrellaComponent } from './estrella/estrella.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogoVotoComponent } from './dialogo-voto/dialogo-voto.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [
    AppComponent,
    FormComponent,
    EstrellaComponent,
    DialogComponent,
    DialogoVotoComponent
  ],
  bootstrap: [AppComponent],
  providers: [ListaService, FormComponent]
})
export class AppModule {}

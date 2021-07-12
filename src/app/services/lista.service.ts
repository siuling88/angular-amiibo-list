import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Amiibo } from '../interfaces/lista';
import { Observable } from 'rxjs';

@Injectable()
export class ListaService {
  constructor(private http: HttpClient) {}

  getLista(): Observable<Amiibo[]> {
    return this.http.get<Amiibo[]>(
      'https://amiiboapi.com/api/amiibo/?character=link'
    );
  }
}

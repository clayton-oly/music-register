import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banda } from '../../models/bandas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandasService {
  private apiUrl = 'http://localhost:3000/bandas';

  constructor(private http : HttpClient) { }

  get(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }
}

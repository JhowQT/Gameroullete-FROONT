import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoletaService {

  private API = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  girar() {
    return this.http.get<any>(`${this.API}/roleta`);
  }
}
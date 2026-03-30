import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = 'http://localhost:8080/usuarios';

  token = signal<string | null>(localStorage.getItem('token'));

  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http.post<any>(`${this.API}/login`, { email, senha }).pipe(
      tap(res => {
        this.token.set(res.token);
        localStorage.setItem('token', res.token);
      })
    );
  }

  cadastrar(usuario: any) {
    return this.http.post(this.API, usuario);
  }

  isLogged() {
    return !!this.token();
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'] 
})
export class CadastroComponent {

  nome = '';
  email = '';
  senha = '';
  steamId = '';

  constructor(private auth: AuthService, private router: Router) {}

  cadastrar() {
    this.auth.cadastrar({
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      steamId: this.steamId
    }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => alert('Erro no cadastro')
    });
  }
}
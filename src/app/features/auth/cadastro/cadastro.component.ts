import { Component, Output, EventEmitter, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  nome = signal('');
  email = signal('');
  senha = signal('');
  mensagem = signal('');

  @Output() usuarioCriado = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  cadastrar() {
    this.auth.cadastrar({
      nome: this.nome(),
      email: this.email(),
      senha: this.senha()
    }).subscribe({
      next: () => {
        this.mensagem.set('Cadastrado!');
        this.usuarioCriado.emit();
      },
      error: () => this.mensagem.set('Erro ao cadastrar')
    });
  }
}

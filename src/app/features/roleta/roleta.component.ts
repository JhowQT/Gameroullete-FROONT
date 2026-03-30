import { Component } from '@angular/core';
import { RoletaService } from '../../core/services/roleta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roleta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roleta.component.html',
  styleUrls: ['./roleta.component.css']
})
export class RoletaComponent {

  jogos: string[] = [];
  resultado = '';

  constructor(private service: RoletaService) {}

  girar() {
    this.service.girar().subscribe((res: any) => {
      this.jogos = res.roleta;
      this.resultado = res.resultado;
    });
  }
}
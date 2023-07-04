import { Component } from '@angular/core';
import { PensamentosInterface } from 'src/app/interface';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css'],
})
export class ThoughtsComponent {
  pensamento: PensamentosInterface = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'model1',
  };

  criarPensamento() {
    alert('Novo pensamento criado!');
  }

  cancelar() {
    alert('Ação cancelada!');
  }
}

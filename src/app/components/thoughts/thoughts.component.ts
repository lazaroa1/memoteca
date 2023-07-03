import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css'],
})
export class ThoughtsComponent {
  pensamento = {
    id: '1',
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

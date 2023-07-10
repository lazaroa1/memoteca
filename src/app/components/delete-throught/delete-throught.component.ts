import { Component, OnInit } from '@angular/core';
import { PensamentosInterface } from 'src/app/interface';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-throught',
  templateUrl: './delete-throught.component.html',
  styleUrls: ['./delete-throught.component.css'],
})
export class DeleteThroughtComponent implements OnInit {
  pensamento: PensamentosInterface = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}

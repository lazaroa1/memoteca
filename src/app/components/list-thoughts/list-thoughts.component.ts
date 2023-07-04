import { Component } from '@angular/core';
import { PensamentosInterface } from 'src/app/interface';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listaPensamentos: PensamentosInterface[] = [];
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PensamentosInterface } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<PensamentosInterface[]> {
    return this.http.get<PensamentosInterface[]>(this.API);
  }

  criar(pensamento: PensamentosInterface): Observable<PensamentosInterface> {
    return this.http.post<PensamentosInterface>(this.API, pensamento);
  }
}

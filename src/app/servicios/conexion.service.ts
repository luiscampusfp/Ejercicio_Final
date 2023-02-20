import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getPedidosCliente(id: number, correo: string): Observable<Number> {
    if (id) {
      return this.http.get<number>(this.url + "/pedidos?id=" + id);
    } else {
      return this.http.get<number>(this.url + "/pedidos?correo=" + correo);
    }
  }

  getPedidosTotal(): Observable<Number> {
    return this.http.get<number>(this.url + "/pedidos");
  }

}

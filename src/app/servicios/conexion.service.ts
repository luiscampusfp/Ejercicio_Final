import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Pedidos } from '../modelos/pedidos';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private url = "http://localhost:3000";
  public id: number;
  constructor(private http: HttpClient) {
    this.id = 0;
  }

  getPedidosCliente(id: number, correo: string): Promise<number> {


    let promesa = new Promise<number>((resolve, reject) => {
      if (id) {
        this.id = id;
        this.http.get<any>(this.url + "/pedidos?id=" + id).subscribe((data: any) => {
          resolve(data.total);
        });
      } else {
        this.http.get<any>(this.url + "/pedidos?correo=" + correo).subscribe((data: any) => {
          this.id = data.id;
          resolve(data.total);
        });
      }
    });
    return promesa;
  }

  getPedidosTotal(): Observable<number> {
    return this.http.get<number>(this.url + "/pedidos");
  }

  getUltimosPedidos(): Observable<Pedidos[]> {
    return this.http.post<Pedidos[]>(this.url + "/pedidos", { id: this.id });
  }


}

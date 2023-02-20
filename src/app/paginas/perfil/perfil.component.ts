import { Component } from '@angular/core';
import { Pedidos } from 'src/app/modelos/pedidos';
import { ConexionService } from 'src/app/servicios/conexion.service';;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public cantP: number;
  public cantT: number;
  public id: number;
  public pedidos: Pedidos[];

  constructor(private conexion: ConexionService) {
    this.cantP = 0;
    this.cantT = 0;
    this.id = conexion.id;
    this.pedidos = Array();
  }

  entrar(dato: string) {
    let promesa: Promise<number>;

    if (isNaN(dato as any)) {
      promesa = this.conexion.getPedidosCliente(0, dato);
    } else {
      promesa = this.conexion.getPedidosCliente(parseInt(dato), "");
    }
    promesa.then((cant: number) => {
      this.cantP = cant;
    });

    this.conexion.getPedidosTotal().subscribe((data: number) => {
      this.cantT = data;
    });
    this.id = this.conexion.id;

    this.conexion.getUltimosPedidos().subscribe((pedidos: Pedidos[]) => {
      this.pedidos = pedidos;
    });
  }

}

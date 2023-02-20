import { Component } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public cantP: number;
  public cantT: number;

  constructor(private conexion: ConexionService) {
    this.cantP = 0;
    this.cantT = 0;
  }

  entrar(dato: string) {
    let promesa: Promise<number>;
    if (isNaN(dato as any)) {
      promesa = this.conexion.getPedidosCliente(0, dato);
    } else {
      promesa = this.conexion.getPedidosCliente(parseInt(dato), "");
    }
    promesa.then(function (cant: number) {

    });
  }

}

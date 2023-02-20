import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { ConexionService } from './servicios/conexion.service';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

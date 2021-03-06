import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { InterVisitacionComponent } from './inter-visitacion/inter-visitacion.component';
import { ConexionComponent } from './conexion/conexion.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConexionService } from './conexion.service';

import { HttpClientModule }    from '@angular/common/http';
import { InterVisitacionService } from './inter-visitacion.service';
import { BuscarComponent } from './buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    PrincipalComponent,
    InterVisitacionComponent,
    ConexionComponent,
    PresupuestoComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConexionService, InterVisitacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

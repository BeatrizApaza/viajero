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


@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    PrincipalComponent,
    InterVisitacionComponent,
    ConexionComponent,
    PresupuestoComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    HttpClientModule,
    AppRoutingModule
=======
    AppRoutingModule,
    HttpClientModule
>>>>>>> ce1af406fbe422d874a13adf66159b31e85863c6
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InterVisitacionComponent }      from './inter-visitacion/inter-visitacion.component';
import { ConexionComponent }      from './conexion/conexion.component';
import { LoginUsuarioComponent }      from './login-usuario/login-usuario.component';
import { PresupuestoComponent }      from './presupuesto/presupuesto.component';
import { PrincipalComponent }      from './principal/principal.component';

const routes: Routes = [
  { path: 'login', component: LoginUsuarioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inter', component: InterVisitacionComponent },
  { path: 'conexiones', component: ConexionComponent },  
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'principal', component: PrincipalComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ,
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

 }



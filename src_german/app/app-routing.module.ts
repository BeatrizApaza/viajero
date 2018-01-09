import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosComponent }      from './productos/productos.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

/*@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})*/
export class AppRoutingModule { }

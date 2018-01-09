import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { AppRoutingModule } from './/app-routing.module';

/*const routes: Routers =[
  {path: 'articulos', component: ProductosComponent}
]*/

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';

import { Conexion } from '../conexion';
//import { CONEXIONES } from '../mock-conexion';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css']
})
export class ConexionComponent implements OnInit {
 // conexiones = CONEXIONES;
  conexiones: Conexion[];
  
  constructor(private conexionService: ConexionService) { }
/*
  getConexiones(): void {
    this.conexiones = this.conexionService.getConexiones1();
  }
*/
  getConexiones(): void {
    this.conexionService.getConexiones() 
    .subscribe(conexiones => this.conexiones = conexiones) ;
  }

  ngOnInit() {
    this.getConexiones();
    console.log('Cargado...Conexiones');
    console.log(this.conexiones)
  }

}

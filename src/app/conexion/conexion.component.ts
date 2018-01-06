import { ConexionService } from '../conexion.service';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ConexionService } from '../conexion.service';

import { Conexion } from '../conexion';
//import { CONEXIONES } from '../mock-conexion';
=======
import { CONEXIONES } from '../mock-conexion'
import { Conexion } from '../conexion';
>>>>>>> ce1af406fbe422d874a13adf66159b31e85863c6

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css']
})
export class ConexionComponent implements OnInit {
<<<<<<< HEAD
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
=======
  // conexiones= CONEXIONES;
  conexiones : Conexion[];
  
  constructor(private conexionService:ConexionService) { }
  getConexiones(): void {
    this.conexionService.getConexiones()
      .subscribe(conexiones => this.conexiones = conexiones);
  }



  ngOnInit() {
    this.getConexiones();
    // console.log(this.conexiones);
>>>>>>> ce1af406fbe422d874a13adf66159b31e85863c6
  }
}

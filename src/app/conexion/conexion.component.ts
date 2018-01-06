import { ConexionService } from '../conexion.service';
import { Component, OnInit } from '@angular/core';
import { CONEXIONES } from '../mock-conexion'
import { Conexion } from '../conexion';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css']
})
export class ConexionComponent implements OnInit {
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
  }
}

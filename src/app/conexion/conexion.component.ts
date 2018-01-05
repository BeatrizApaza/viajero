import { Component, OnInit } from '@angular/core';
import { CONEXIONES } from '../mock-conexion'

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css']
})
export class ConexionComponent implements OnInit {
  conexiones= CONEXIONES;
  
  constructor() { }

  ngOnInit() {
    // console.log(this.conexiones);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Conexion } from './conexion';
//import { CONEXIONES } from './mock-conexion';

@Injectable()
export class ConexionService {
  private conexionesUrl = 'https://jsonplaceholder.typicode.com/photos';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /*
  getConexiones1(): Conexion[] {
    return CONEXIONES;
  
  }
*/
  getConexiones(): Observable<Conexion[]> {
    return this.http.get<Conexion[]>(this.conexionesUrl)
  }




}

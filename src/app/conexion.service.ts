import { Injectable } from '@angular/core';
<<<<<<< HEAD
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




=======
import { Conexion } from './conexion';
//import { CONEXIONES } from './mock-conexion';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ConexionService {
  private conexionesUrl = "https://jsonplaceholder.typicode.com/comments";
//  private heroesUrl = 'api/heroes'; 

  constructor(private http: HttpClient) { }
  /*
  getConexiones(): Conexion[] {
    return CONEXIONES;
  }
*/
  getConexiones(): Observable<Conexion[]> {
   // return of(CONEXIONES);
   return this.http.get<Conexion[]>(this.conexionesUrl)
  }


>>>>>>> ce1af406fbe422d874a13adf66159b31e85863c6
}

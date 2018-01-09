import { Injectable } from '@angular/core';
import { Conexion } from './conexion';
//import { CONEXIONES } from './mock-conexion';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ConexionService {
  private viajeroUrl = "https://jsonplaceholder.typicode.com/posts";
//  private heroesUrl = 'api/heroes'; 

  constructor(private http: HttpClient) { }
  /*
  getConexiones(): Conexion[] {
    return CONEXIONES;
  }
*/
  getConexiones(): Observable<Conexion[]> {
   // return of(CONEXIONES);
   return this.http.get<Conexion[]>(this.viajeroUrl)
  }


}

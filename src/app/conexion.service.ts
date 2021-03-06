import { Injectable } from '@angular/core';
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

  /* GET heroes whose name contains search term */
  searchConexiones(term: string): Observable<Conexion[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Conexion[]>(`https://jsonplaceholder.typicode.com/comments?postId=${term}`
    );
  }
}

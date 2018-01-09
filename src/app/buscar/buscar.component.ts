import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Conexion } from '../conexion';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  conexiones$: Observable<Conexion[]>;

  private searchTerms = new Subject<string>();

  constructor(private conexionService: ConexionService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    
  }

  ngOnInit(): void {
    this.conexiones$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.conexionService.searchConexiones(term)),
    );
  }

}


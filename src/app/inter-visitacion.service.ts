import { Injectable } from '@angular/core';
import { InterVisitacion } from './inter-visitacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class InterVisitacionService {
  private visitacionesUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  getInterVisitacion(): Observable<InterVisitacion[]> {
    return this.http.get<InterVisitacion[]>(this.visitacionesUrl)
  }
}

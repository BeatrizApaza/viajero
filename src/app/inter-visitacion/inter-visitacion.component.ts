import { InterVisitacionService } from '../inter-visitacion.service';
import { Component, OnInit } from '@angular/core';
import { InterVisitacion } from '../inter-visitacion';

@Component({
  selector: 'app-inter-visitacion',
  templateUrl: './inter-visitacion.component.html',
  styleUrls: ['./inter-visitacion.component.css']
})
export class InterVisitacionComponent implements OnInit {

  interVisitaciones: InterVisitacion[];

  constructor(private interVisitacionService:InterVisitacionService) { }
  getInterVisitacion(): void {
    this.interVisitacionService.getInterVisitacion()
      .subscribe(interVisitaciones => this.interVisitaciones = interVisitaciones);
  }

  ngOnInit() {
    this.getInterVisitacion(); 
  }
}



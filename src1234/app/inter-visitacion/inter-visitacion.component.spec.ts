import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterVisitacionComponent } from './inter-visitacion.component';

describe('InterVisitacionComponent', () => {
  let component: InterVisitacionComponent;
  let fixture: ComponentFixture<InterVisitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterVisitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterVisitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

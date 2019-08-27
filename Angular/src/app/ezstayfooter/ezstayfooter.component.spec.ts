import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzstayfooterComponent } from './ezstayfooter.component';

describe('EzstayfooterComponent', () => {
  let component: EzstayfooterComponent;
  let fixture: ComponentFixture<EzstayfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzstayfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzstayfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

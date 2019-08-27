import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzstayhomeComponent } from './ezstayhome.component';

describe('EzstayhomeComponent', () => {
  let component: EzstayhomeComponent;
  let fixture: ComponentFixture<EzstayhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzstayhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzstayhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

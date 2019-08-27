import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzregisterComponent } from './ezregister.component';

describe('EzregisterComponent', () => {
  let component: EzregisterComponent;
  let fixture: ComponentFixture<EzregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

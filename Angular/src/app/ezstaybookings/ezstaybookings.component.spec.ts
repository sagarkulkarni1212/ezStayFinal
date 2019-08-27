import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzstaybookingsComponent } from './ezstaybookings.component';

describe('EzstaybookingsComponent', () => {
  let component: EzstaybookingsComponent;
  let fixture: ComponentFixture<EzstaybookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzstaybookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzstaybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzloginComponent } from './ezlogin.component';

describe('EzloginComponent', () => {
  let component: EzloginComponent;
  let fixture: ComponentFixture<EzloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

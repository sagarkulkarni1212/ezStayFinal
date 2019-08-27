import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzstayheaderComponent } from './ezstayheader.component';

describe('EzstayheaderComponent', () => {
  let component: EzstayheaderComponent;
  let fixture: ComponentFixture<EzstayheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzstayheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzstayheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

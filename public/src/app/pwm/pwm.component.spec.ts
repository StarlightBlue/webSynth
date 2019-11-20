import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwmComponent } from './pwm.component';

describe('PwmComponent', () => {
  let component: PwmComponent;
  let fixture: ComponentFixture<PwmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticeObservableComponent } from './pratice-observable.component';

describe('PraticeObservableComponent', () => {
  let component: PraticeObservableComponent;
  let fixture: ComponentFixture<PraticeObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticeObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

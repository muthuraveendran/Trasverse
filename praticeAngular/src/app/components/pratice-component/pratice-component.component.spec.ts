import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticeComponentComponent } from './pratice-component.component';

describe('PraticeComponentComponent', () => {
  let component: PraticeComponentComponent;
  let fixture: ComponentFixture<PraticeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

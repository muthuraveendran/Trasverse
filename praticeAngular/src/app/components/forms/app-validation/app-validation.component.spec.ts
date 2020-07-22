import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppValidationComponent } from './app-validation.component';

describe('AppValidationComponent', () => {
  let component: AppValidationComponent;
  let fixture: ComponentFixture<AppValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

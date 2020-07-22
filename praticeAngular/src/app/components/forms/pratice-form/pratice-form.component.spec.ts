import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticeFormComponent } from './pratice-form.component';

describe('PraticeFormComponent', () => {
  let component: PraticeFormComponent;
  let fixture: ComponentFixture<PraticeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

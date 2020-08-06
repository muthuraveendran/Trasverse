import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdGenerateComponent } from './id-generate.component';

describe('IdGenerateComponent', () => {
  let component: IdGenerateComponent;
  let fixture: ComponentFixture<IdGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

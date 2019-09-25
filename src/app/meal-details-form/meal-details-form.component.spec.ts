import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDetailsFormComponent } from './meal-details-form.component';

describe('MealDetailsFormComponent', () => {
  let component: MealDetailsFormComponent;
  let fixture: ComponentFixture<MealDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

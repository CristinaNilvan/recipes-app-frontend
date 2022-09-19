import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDetailsCardComponent } from './ingredient-details-card.component';

describe('IngredientDetailsCardComponent', () => {
  let component: IngredientDetailsCardComponent;
  let fixture: ComponentFixture<IngredientDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

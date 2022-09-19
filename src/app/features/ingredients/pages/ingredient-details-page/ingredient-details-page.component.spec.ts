import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDetailsPageComponent } from './ingredient-details-page.component';

describe('IngredientDetailsPageComponent', () => {
  let component: IngredientDetailsPageComponent;
  let fixture: ComponentFixture<IngredientDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

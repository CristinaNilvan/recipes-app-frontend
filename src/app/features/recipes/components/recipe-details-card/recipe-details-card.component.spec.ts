import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsCardComponent } from './recipe-details-card.component';

describe('RecipeDetailsCardComponent', () => {
  let component: RecipeDetailsCardComponent;
  let fixture: ComponentFixture<RecipeDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsPageComponent } from './recipe-details-page.component';

describe('RecipeDetailsPageComponent', () => {
  let component: RecipeDetailsPageComponent;
  let fixture: ComponentFixture<RecipeDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

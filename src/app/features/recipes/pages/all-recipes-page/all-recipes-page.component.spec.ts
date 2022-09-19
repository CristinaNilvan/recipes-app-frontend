import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesPageComponent } from './all-recipes-page.component';

describe('AllRecipesListComponent', () => {
  let component: AllRecipesPageComponent;
  let fixture: ComponentFixture<AllRecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllRecipesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

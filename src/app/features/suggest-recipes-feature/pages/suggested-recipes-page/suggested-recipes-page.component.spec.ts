import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedRecipesPageComponent } from './suggested-recipes-page.component';

describe('SuggestedRecipesPageComponent', () => {
  let component: SuggestedRecipesPageComponent;
  let fixture: ComponentFixture<SuggestedRecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedRecipesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

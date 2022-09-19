import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesListComponent } from './all-recipes-list.component';

describe('AllRecipesListComponent', () => {
  let component: AllRecipesListComponent;
  let fixture: ComponentFixture<AllRecipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRecipesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

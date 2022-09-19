import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIngredientsPageComponent } from './all-ingredients-page.component';

describe('AllIngredientsListComponent', () => {
  let component: AllIngredientsPageComponent;
  let fixture: ComponentFixture<AllIngredientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllIngredientsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllIngredientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

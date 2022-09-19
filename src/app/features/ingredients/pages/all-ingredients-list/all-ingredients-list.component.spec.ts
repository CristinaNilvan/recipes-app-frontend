import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIngredientsListComponent } from './all-ingredients-list.component';

describe('AllIngredientsListComponent', () => {
  let component: AllIngredientsListComponent;
  let fixture: ComponentFixture<AllIngredientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIngredientsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllIngredientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

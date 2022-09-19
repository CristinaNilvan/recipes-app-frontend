import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedIngredientsPageComponent } from './approved-ingredients-page.component';

describe('ApprovedIngredientsPageComponent', () => {
  let component: ApprovedIngredientsPageComponent;
  let fixture: ComponentFixture<ApprovedIngredientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedIngredientsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedIngredientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedRecipesPageComponent } from './approved-recipes-page.component';

describe('ApprovedRecipesPageComponent', () => {
  let component: ApprovedRecipesPageComponent;
  let fixture: ComponentFixture<ApprovedRecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedRecipesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

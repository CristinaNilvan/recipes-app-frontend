import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedRecipesPageComponent } from './unapproved-recipes-page.component';

describe('UnapprovedRecipesPageComponent', () => {
  let component: UnapprovedRecipesPageComponent;
  let fixture: ComponentFixture<UnapprovedRecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedRecipesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnapprovedRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

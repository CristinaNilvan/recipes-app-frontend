import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedIngredientsPageComponent } from './unapproved-ingredients-page.component';

describe('UnapprovedIngredientsPageComponent', () => {
  let component: UnapprovedIngredientsPageComponent;
  let fixture: ComponentFixture<UnapprovedIngredientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedIngredientsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnapprovedIngredientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

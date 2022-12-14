import { ViewportScroller } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MealType } from 'src/app/core/enums/meal-type';
import { MealPlan } from 'src/app/core/models/get-models/meal-plan';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { getRecipeMealTypeKey } from 'src/app/core/utils/recipe-functions';

@Component({
  selector: 'app-meal-planner-page',
  templateUrl: './meal-planner-page.component.html',
  styleUrls: ['./meal-planner-page.component.css'],
})
export class MealPlannerPageComponent implements OnInit {
  generated: boolean = false;
  generateMealPlanForm!: FormGroup;
  mealPlan!: MealPlan;
  mealType!: MealType;
  calories!: number;
  responseMessage: string = '';

  constructor(
    private scroller: ViewportScroller,
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.generateMealPlanForm = this.formBuilder.group({
      mealType: ['', [Validators.required]],
      calories: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
    });
  }

  onSubmit() {
    this.responseMessage = '';
    this.mealType = getRecipeMealTypeKey(this.mealTypeFromForm);
    this.calories = parseFloat(this.caloriesFromForm);

    this.recipeService
      .generateMealPlanFromRecipes(this.mealType, this.calories)
      .subscribe({
        next: (mealPlan) => {
          this.mealPlan = mealPlan;
          this.generated = true;
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage =
              "Can't find enough recipes based on your choices to generate meal plan!";
            this.notifierService.showNotification(this.responseMessage);
          }
        },
      });
  }

  navigateToFragment(event: any) {
    this.scroller.scrollToAnchor('mealPlan');
    event.preventDefault();
  }

  get mealTypeFromForm(): string {
    return this.generateMealPlanForm.get('mealType')?.value;
  }

  get caloriesFromForm(): string {
    return this.generateMealPlanForm.get('calories')?.value;
  }
}

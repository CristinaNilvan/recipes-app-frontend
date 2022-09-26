import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MealType } from 'src/app/core/enums/meal-type';
import { MealPlan } from 'src/app/core/models/meal-plan';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { getRecipeMealTypeKey } from 'src/app/core/utils/recipe-functions';

@Component({
  selector: 'app-meal-planner-page',
  templateUrl: './meal-planner-page.component.html',
  styleUrls: ['./meal-planner-page.component.css'],
})
export class MealPlannerPageComponent implements OnInit {
  generateMealPlanForm!: FormGroup;
  mealPlan!: MealPlan;
  mealType: MealType = MealType.Normal;
  calories: number = 2000;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
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
    this.mealType = getRecipeMealTypeKey(this.mealTypeFromForm);
    this.calories = parseFloat(this.caloriesFromForm);

    this.recipeService
      .generateMealPlanFromRecipes(this.mealType, this.calories)
      .subscribe((mealPlan) => (this.mealPlan = mealPlan));
  }

  onClear() {
    this.generateMealPlanForm.reset();
  }

  get mealTypeFromForm(): string {
    return this.generateMealPlanForm.get('mealType')?.value;
  }

  get caloriesFromForm(): string {
    return this.generateMealPlanForm.get('calories')?.value;
  }
}

import { Component, OnInit } from '@angular/core';
import { MealType } from 'src/app/core/enums/meal-type';
import { MealPlan } from 'src/app/core/models/meal-plan';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-meal-planner-page',
  templateUrl: './meal-planner-page.component.html',
  styleUrls: ['./meal-planner-page.component.css'],
})
export class MealPlannerPageComponent implements OnInit {
  mealPlan!: MealPlan;
  mealType: MealType = MealType.Normal;
  calories: number = 2000;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .generateMealPlanFromRecipes(this.mealType, this.calories)
      .subscribe((mealPlan) => {
        this.mealPlan = mealPlan;
        console.log(this.mealPlan);
      });
  }
}

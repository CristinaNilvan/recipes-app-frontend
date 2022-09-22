import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeModule } from '../recipes/recipe.module';
import { MealPlannerPageComponent } from './pages/meal-planner-page/meal-planner-page.component';
import { MealPlanDetailsComponent } from './components/meal-plan-details/meal-plan-details.component';

@NgModule({
  declarations: [MealPlannerPageComponent, MealPlanDetailsComponent],
  imports: [CommonModule, CoreModule, SharedModule, RecipeModule],
  exports: [MealPlannerPageComponent],
})
export class MealPlannerModule {}

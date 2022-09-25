import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { FoundRecipesPageComponent } from './features/find-recipes-feature/pages/found-recipes-page/found-recipes-page.component';
import { CreateIngredientComponent } from './features/ingredients/components/create-ingredient/create-ingredient.component';
import { ApprovedIngredientsPageComponent } from './features/ingredients/pages/approved-ingredients-page/approved-ingredients-page.component';
import { MealPlannerPageComponent } from './features/meal-planner-feature/pages/meal-planner-page/meal-planner-page.component';
import { CreateRecipeComponent } from './features/recipes/components/create-recipe/create-recipe.component';
import { ApprovedRecipesPageComponent } from './features/recipes/pages/approved-recipes-page/approved-recipes-page.component';
import { SuggestedRecipesPageComponent } from './features/suggest-recipes-feature/pages/suggested-recipes-page/suggested-recipes-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: ApprovedRecipesPageComponent },
  { path: 'ingredients', component: ApprovedIngredientsPageComponent },
  { path: 'meal-planner', component: MealPlannerPageComponent },
  { path: 'suggest-recipes', component: SuggestedRecipesPageComponent },
  { path: 'find-recipes', component: FoundRecipesPageComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: 'create-ingredient', component: CreateIngredientComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

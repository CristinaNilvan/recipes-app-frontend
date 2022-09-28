import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { FoundRecipesPageComponent } from './features/find-recipes-feature/pages/found-recipes-page/found-recipes-page.component';
import { CreateIngredientComponent } from './features/ingredients/components/create-ingredient/create-ingredient.component';
import { DeleteIngredientComponent } from './features/ingredients/components/delete-ingredient/delete-ingredient.component';
import { GetIngredientComponent } from './features/ingredients/components/get-ingredient/get-ingredient.component';
import { IngredientDetailsComponent } from './features/ingredients/components/ingredient-details/ingredient-details.component';
import { ApprovedIngredientsPageComponent } from './features/ingredients/pages/approved-ingredients-page/approved-ingredients-page.component';
import { CrudIngredientPageComponent } from './features/ingredients/pages/crud-ingredient-page/crud-ingredient-page.component';
import { MealPlannerPageComponent } from './features/meal-planner-feature/pages/meal-planner-page/meal-planner-page.component';
import { CreateRecipeStepperComponent } from './features/recipes/components/create-recipe-stepper/create-recipe-stepper.component';
import { RecipeDetailsComponent } from './features/recipes/components/recipe-details/recipe-details.component';
import { ApprovedRecipesPageComponent } from './features/recipes/pages/approved-recipes-page/approved-recipes-page.component';
import { CrudRecipePageComponent } from './features/recipes/pages/crud-recipe-page/crud-recipe-page.component';
import { SuggestedRecipesPageComponent } from './features/suggest-recipes-feature/pages/suggested-recipes-page/suggested-recipes-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: ApprovedRecipesPageComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'crud-recipe', component: CrudRecipePageComponent },
  { path: 'ingredients', component: ApprovedIngredientsPageComponent },
  { path: 'ingredients/:id', component: IngredientDetailsComponent },
  { path: 'crud-ingredient', component: CrudIngredientPageComponent },
  { path: 'create-ingredient', component: CreateIngredientComponent },
  { path: 'get-ingredient', component: GetIngredientComponent },
  { path: 'delete-ingredient', component: DeleteIngredientComponent },
  { path: 'meal-planner', component: MealPlannerPageComponent },
  { path: 'suggest-recipes', component: SuggestedRecipesPageComponent },
  { path: 'find-recipes', component: FoundRecipesPageComponent },
  { path: 'create-recipe', component: CreateRecipeStepperComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

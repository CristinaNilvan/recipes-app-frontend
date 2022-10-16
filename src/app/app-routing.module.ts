import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AdminFeaturesComponent } from './features/admin-feature/pages/admin-features/admin-features.component';
import { AllIngredientsAdminComponent } from './features/admin-feature/components/ingredients/all-ingredients-admin/all-ingredients-admin.component';
import { AllRecipesAdminComponent } from './features/admin-feature/components/recipes/all-recipes-admin/all-recipes-admin.component';
import { ApprovedIngredientsAdminComponent } from './features/admin-feature/components/ingredients/approved-ingredients-admin/approved-ingredients-admin.component';
import { ApprovedRecipesAdminComponent } from './features/admin-feature/components/recipes/approved-recipes-admin/approved-recipes-admin.component';
import { UnapprovedIngredientsAdminComponent } from './features/admin-feature/components/ingredients/unapproved-ingredients-admin/unapproved-ingredients-admin.component';
import { UnapprovedRecipesAdminComponent } from './features/admin-feature/components/recipes/unapproved-recipes-admin/unapproved-recipes-admin.component';
import { FoundRecipesPageComponent } from './features/find-recipes-feature/pages/found-recipes-page/found-recipes-page.component';
import { HomeComponent } from './features/home-feature/pages/home/home.component';
import { CreateIngredientComponent } from './shared/components/ingredients/create-ingredient/create-ingredient.component';
import { DeleteIngredientComponent } from './features/admin-feature/components/ingredients/delete-ingredient/delete-ingredient.component';
import { GetIngredientComponent } from './features/admin-feature/components/ingredients/get-ingredient/get-ingredient.component';
import { IngredientDetailsComponent } from './features/ingredients/components/ingredient-details/ingredient-details.component';
import { UpdateIngredientDetailsComponent } from './features/admin-feature/components/ingredients/update-ingredient-details/update-ingredient-details.component';
import { UpdateIngredientComponent } from './features/admin-feature/components/ingredients/update-ingredient/update-ingredient.component';
import { MealPlannerPageComponent } from './features/meal-planner-feature/pages/meal-planner-page/meal-planner-page.component';
import { CreateRecipeStepperComponent } from './shared/components/recipes/create-recipe-stepper/create-recipe-stepper.component';
import { DeleteRecipeComponent } from './features/admin-feature/components/recipes/delete-recipe/delete-recipe.component';
import { GetRecipeComponent } from './features/admin-feature/components/recipes/get-recipe/get-recipe.component';
import { RecipeDetailsComponent } from './features/recipes/components/recipe-details/recipe-details.component';
import { UpdateRecipeDetailsComponent } from './features/admin-feature/components/recipes/update-recipe-details/update-recipe-details.component';
import { UpdateRecipeComponent } from './features/admin-feature/components/recipes/update-recipe/update-recipe.component';
import { SuggestedRecipesPageComponent } from './features/suggest-recipes-feature/pages/suggested-recipes-page/suggested-recipes-page.component';
import { ApproveIngredientComponent } from './features/admin-feature/components/ingredients/approve-ingredient/approve-ingredient.component';
import { ApproveRecipeComponent } from './features/admin-feature/components/recipes/approve-recipe/approve-recipe.component';
import { AllRecipesComponent } from './features/recipes/pages/all-recipes/all-recipes.component';
import { AllIngredientsComponent } from './features/ingredients/pages/all-ingredients/all-ingredients.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: AllRecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'create-recipe', component: CreateRecipeStepperComponent },
  { path: 'ingredients', component: AllIngredientsComponent },
  { path: 'ingredients/:id', component: IngredientDetailsComponent },
  { path: 'create-ingredient', component: CreateIngredientComponent },
  { path: 'meal-planner', component: MealPlannerPageComponent },
  { path: 'suggest-recipes', component: SuggestedRecipesPageComponent },
  { path: 'find-recipes', component: FoundRecipesPageComponent },

  { path: 'admin', component: AdminFeaturesComponent },
  { path: 'admin/all-ingredients', component: AllIngredientsAdminComponent },
  {
    path: 'admin/approved-ingredients',
    component: ApprovedIngredientsAdminComponent,
  },
  {
    path: 'admin/unapproved-ingredients',
    component: UnapprovedIngredientsAdminComponent,
  },
  { path: 'admin/ingredients/:id', component: IngredientDetailsComponent },
  { path: 'admin/create-ingredient', component: CreateIngredientComponent },
  { path: 'admin/get-ingredient', component: GetIngredientComponent },
  { path: 'admin/update-ingredient', component: UpdateIngredientComponent },
  {
    path: 'admin/update-ingredient/:id',
    component: UpdateIngredientDetailsComponent,
  },
  { path: 'admin/delete-ingredient', component: DeleteIngredientComponent },
  { path: 'admin/approve-ingredient', component: ApproveIngredientComponent },

  { path: 'admin/all-recipes', component: AllRecipesAdminComponent },
  {
    path: 'admin/approved-recipes',
    component: ApprovedRecipesAdminComponent,
  },
  {
    path: 'admin/unapproved-recipes',
    component: UnapprovedRecipesAdminComponent,
  },
  { path: 'admin/recipes/:id', component: RecipeDetailsComponent },
  { path: 'admin/create-recipe', component: CreateRecipeStepperComponent },
  { path: 'admin/get-recipe', component: GetRecipeComponent },
  { path: 'admin/update-recipe', component: UpdateRecipeComponent },
  { path: 'admin/update-recipe/:id', component: UpdateRecipeDetailsComponent },
  { path: 'admin/delete-recipe', component: DeleteRecipeComponent },
  { path: 'admin/approve-recipe', component: ApproveRecipeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AdminFeaturesComponent } from './features/admin-feature/pages/admin-features/admin-features.component';
import { AllIngredientsAdminComponent } from './features/admin-feature/components/all-ingredients-admin/all-ingredients-admin.component';
import { AllRecipesAdminComponent } from './features/admin-feature/components/all-recipes-admin/all-recipes-admin.component';
import { ApprovedIngredientsAdminComponent } from './features/admin-feature/components/approved-ingredients-admin/approved-ingredients-admin.component';
import { ApprovedRecipesAdminComponent } from './features/admin-feature/components/approved-recipes-admin/approved-recipes-admin.component';
import { UnapprovedIngredientsAdminComponent } from './features/admin-feature/components/unapproved-ingredients-admin/unapproved-ingredients-admin.component';
import { UnapprovedRecipesAdminComponent } from './features/admin-feature/components/unapproved-recipes-admin/unapproved-recipes-admin.component';
import { FoundRecipesPageComponent } from './features/find-recipes-feature/pages/found-recipes-page/found-recipes-page.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CreateIngredientComponent } from './features/ingredients/components/create-ingredient/create-ingredient.component';
import { DeleteIngredientComponent } from './features/ingredients/components/delete-ingredient/delete-ingredient.component';
import { GetIngredientComponent } from './features/ingredients/components/get-ingredient/get-ingredient.component';
import { IngredientDetailsComponent } from './features/ingredients/components/ingredient-details/ingredient-details.component';
import { UpdateIngredientDetailsComponent } from './features/ingredients/components/update-ingredient-details/update-ingredient-details.component';
import { UpdateIngredientComponent } from './features/ingredients/components/update-ingredient/update-ingredient.component';
import { ApprovedIngredientsPageComponent } from './features/ingredients/pages/approved-ingredients-page/approved-ingredients-page.component';
import { CrudIngredientPageComponent } from './features/ingredients/pages/crud-ingredient-page/crud-ingredient-page.component';
import { MealPlannerPageComponent } from './features/meal-planner-feature/pages/meal-planner-page/meal-planner-page.component';
import { CreateRecipeStepperComponent } from './features/recipes/components/create-recipe-stepper/create-recipe-stepper.component';
import { DeleteRecipeComponent } from './features/recipes/components/delete-recipe/delete-recipe.component';
import { GetRecipeComponent } from './features/recipes/components/get-recipe/get-recipe.component';
import { RecipeDetailsComponent } from './features/recipes/components/recipe-details/recipe-details.component';
import { UpdateRecipeDetailsComponent } from './features/recipes/components/update-recipe-details/update-recipe-details.component';
import { UpdateRecipeComponent } from './features/recipes/components/update-recipe/update-recipe.component';
import { ApprovedRecipesPageComponent } from './features/recipes/pages/approved-recipes-page/approved-recipes-page.component';
import { CrudRecipePageComponent } from './features/recipes/pages/crud-recipe-page/crud-recipe-page.component';
import { SuggestedRecipesPageComponent } from './features/suggest-recipes-feature/pages/suggested-recipes-page/suggested-recipes-page.component';
import { ApproveIngredientComponent } from './features/admin-feature/components/approve-ingredient/approve-ingredient.component';
import { ApproveRecipeComponent } from './features/admin-feature/components/approve-recipe/approve-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: ApprovedRecipesPageComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'recipe-operations', component: CrudRecipePageComponent },
  { path: 'create-recipe', component: CreateRecipeStepperComponent },
  { path: 'get-recipe', component: GetRecipeComponent },
  { path: 'delete-recipe', component: DeleteRecipeComponent },
  { path: 'update-recipe', component: UpdateRecipeComponent },
  { path: 'update-recipe/:id', component: UpdateRecipeDetailsComponent },
  { path: 'ingredients', component: ApprovedIngredientsPageComponent },
  { path: 'ingredients/:id', component: IngredientDetailsComponent },
  { path: 'ingredient-operations', component: CrudIngredientPageComponent },
  { path: 'create-ingredient', component: CreateIngredientComponent },
  { path: 'get-ingredient', component: GetIngredientComponent },
  { path: 'update-ingredient', component: UpdateIngredientComponent },
  {
    path: 'update-ingredient/:id',
    component: UpdateIngredientDetailsComponent,
  },
  { path: 'delete-ingredient', component: DeleteIngredientComponent },
  { path: 'meal-planner', component: MealPlannerPageComponent },
  { path: 'suggest-recipes', component: SuggestedRecipesPageComponent },
  { path: 'find-recipes', component: FoundRecipesPageComponent },
  { path: 'approve-ingredient', component: ApproveIngredientComponent },
  { path: 'approve-recipe', component: ApproveRecipeComponent },
  { path: 'admin', component: AdminFeaturesComponent },
  { path: 'all-ingredients', component: AllIngredientsAdminComponent },
  {
    path: 'approved-ingredients',
    component: ApprovedIngredientsAdminComponent,
  },
  {
    path: 'unapproved-ingredients',
    component: UnapprovedIngredientsAdminComponent,
  },
  { path: 'all-recipes', component: AllRecipesAdminComponent },
  {
    path: 'approved-recipes',
    component: ApprovedRecipesAdminComponent,
  },
  {
    path: 'unapproved-recipes',
    component: UnapprovedRecipesAdminComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientDetailsCardAdminComponent } from './components/ingredients/ingredient-details-card-admin/ingredient-details-card-admin.component';
import { RecipeDetailsCardAdminComponent } from './components/recipes/recipe-details-card-admin/recipe-details-card-admin.component';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientsListAdminComponent } from './components/ingredients/ingredients-list-admin/ingredients-list-admin.component';
import { RecipesListAdminComponent } from './components/recipes/recipes-list-admin/recipes-list-admin.component';
import { AllIngredientsAdminComponent } from './components/ingredients/all-ingredients-admin/all-ingredients-admin.component';
import { ApprovedIngredientsAdminComponent } from './components/ingredients/approved-ingredients-admin/approved-ingredients-admin.component';
import { UnapprovedIngredientsAdminComponent } from './components/ingredients/unapproved-ingredients-admin/unapproved-ingredients-admin.component';
import { AllRecipesAdminComponent } from './components/recipes/all-recipes-admin/all-recipes-admin.component';
import { ApprovedRecipesAdminComponent } from './components/recipes/approved-recipes-admin/approved-recipes-admin.component';
import { UnapprovedRecipesAdminComponent } from './components/recipes/unapproved-recipes-admin/unapproved-recipes-admin.component';
import { AdminFeaturesComponent } from './pages/admin-features/admin-features.component';
import { ApproveRecipeComponent } from './components/recipes/approve-recipe/approve-recipe.component';
import { ApproveIngredientComponent } from './components/ingredients/approve-ingredient/approve-ingredient.component';
import { DeleteIngredientComponent } from './components/ingredients/delete-ingredient/delete-ingredient.component';
import { GetIngredientComponent } from './components/ingredients/get-ingredient/get-ingredient.component';
import { UpdateIngredientDetailsComponent } from './components/ingredients/update-ingredient-details/update-ingredient-details.component';
import { UpdateIngredientComponent } from './components/ingredients/update-ingredient/update-ingredient.component';
import { GetRecipeComponent } from './components/recipes/get-recipe/get-recipe.component';
import { DeleteRecipeComponent } from './components/recipes/delete-recipe/delete-recipe.component';
import { UpdateRecipeComponent } from './components/recipes/update-recipe/update-recipe.component';
import { UpdateRecipeDetailsComponent } from './components/recipes/update-recipe-details/update-recipe-details.component';
import { UpdateRecipeIngredientsListComponent } from './components/recipes/update-recipe-ingredient-list/update-recipe-ingredient-list.component';

@NgModule({
  declarations: [
    IngredientDetailsCardAdminComponent,
    RecipeDetailsCardAdminComponent,
    IngredientsListAdminComponent,
    RecipesListAdminComponent,
    AllIngredientsAdminComponent,
    ApprovedIngredientsAdminComponent,
    UnapprovedIngredientsAdminComponent,
    GetIngredientComponent,
    UpdateIngredientComponent,
    UpdateIngredientDetailsComponent,
    DeleteIngredientComponent,
    AllRecipesAdminComponent,
    ApprovedRecipesAdminComponent,
    UnapprovedRecipesAdminComponent,
    GetRecipeComponent,
    UpdateRecipeComponent,
    UpdateRecipeDetailsComponent,
    UpdateRecipeIngredientsListComponent,
    DeleteRecipeComponent,
    ApproveIngredientComponent,
    ApproveRecipeComponent,
    AdminFeaturesComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [
    AllIngredientsAdminComponent,
    ApprovedIngredientsAdminComponent,
    UnapprovedIngredientsAdminComponent,
    GetIngredientComponent,
    UpdateIngredientComponent,
    UpdateIngredientDetailsComponent,
    DeleteIngredientComponent,

    AllRecipesAdminComponent,
    ApprovedRecipesAdminComponent,
    UnapprovedRecipesAdminComponent,
    GetRecipeComponent,
    UpdateRecipeComponent,
    UpdateRecipeDetailsComponent,
    DeleteRecipeComponent,

    AdminFeaturesComponent,
  ],
})
export class AdminModule {}

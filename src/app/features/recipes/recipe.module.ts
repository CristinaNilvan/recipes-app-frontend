import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsCardComponent } from './components/recipe-details-card/recipe-details-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { ApprovedRecipesPageComponent } from './pages/approved-recipes-page/approved-recipes-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientModule } from '../ingredients/ingredient.module';
import { CreateRecipeStepperComponent } from './components/create-recipe-stepper/create-recipe-stepper.component';
import { CreateRecipeIngredientComponent } from './components/create-recipe-ingredient/create-recipe-ingredient.component';
import { CreateRecipeIngredientListComponent } from './components/create-recipe-ingredient-list/create-recipe-ingredient-list.component';
import { RecipeIngredientFromListCardComponent } from './components/recipe-ingredient-from-list-card/recipe-ingredient-from-list-card.component';
import { CrudRecipePageComponent } from './pages/crud-recipe-page/crud-recipe-page.component';
import { GetRecipeComponent } from './components/get-recipe/get-recipe.component';
import { DeleteRecipeComponent } from './components/delete-recipe/delete-recipe.component';
import { UpdateRecipeComponent } from './components/update-recipe/update-recipe.component';
import { UpdateRecipeDetailsComponent } from './components/update-recipe-details/update-recipe-details.component';
import { RecipeIngredientsListComponent } from './components/recipe-ingredients-list/recipe-ingredients-list.component';
import { UpdateRecipeIngredientsListComponent } from './components/update-recipe-ingredients-list/update-recipe-ingredients-list.component';

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailsCardComponent,
    RecipeDetailsComponent,
    ApprovedRecipesPageComponent,
    CreateRecipeStepperComponent,
    CreateRecipeIngredientComponent,
    CreateRecipeIngredientListComponent,
    RecipeIngredientFromListCardComponent,
    CrudRecipePageComponent,
    GetRecipeComponent,
    DeleteRecipeComponent,
    UpdateRecipeComponent,
    UpdateRecipeDetailsComponent,
    RecipeIngredientsListComponent,
    UpdateRecipeIngredientsListComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule, IngredientModule],
  exports: [
    RecipeDetailsCardComponent,
    RecipesListComponent,
    CreateRecipeStepperComponent,
    ApprovedRecipesPageComponent,
    CrudRecipePageComponent,
    GetRecipeComponent,
    UpdateRecipeComponent,
    UpdateRecipeDetailsComponent,
    DeleteRecipeComponent,
  ],
})
export class RecipeModule {}

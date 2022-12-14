import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from '../app-routing.module';
import { CreateRecipeIngredientComponent } from './components/recipe-ingredients/create-recipe-ingredient/create-recipe-ingredient.component';
import { CreateRecipeIngredientListComponent } from './components/recipe-ingredients/create-recipe-ingredient-list/create-recipe-ingredient-list.component';
import { RecipeIngredientFromListCardComponent } from './components/recipe-ingredients/recipe-ingredient-from-list-card/recipe-ingredient-from-list-card.component';
import { RecipeIngredientsListComponent } from './components/recipe-ingredients/recipe-ingredients-list/recipe-ingredients-list.component';
import { RecipeDetailsCardComponent } from './components/recipes/recipe-details-card/recipe-details-card.component';
import { CreateIngredientComponent } from './components/ingredients/create-ingredient/create-ingredient.component';
import { CreateRecipeStepperComponent } from './components/recipes/create-recipe-stepper/create-recipe-stepper.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';

const modules = [
  CommonModule,
  AppRoutingModule,
  FlexLayoutModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  InfiniteScrollModule,
];

@NgModule({
  declarations: [
    CreateRecipeIngredientComponent,
    CreateRecipeIngredientListComponent,
    RecipeIngredientFromListCardComponent,
    RecipeIngredientsListComponent,

    CreateIngredientComponent,

    RecipeDetailsCardComponent,
    RecipesListComponent,
    CreateRecipeStepperComponent,
  ],
  imports: modules,
  exports: [
    modules,

    CreateRecipeIngredientComponent,
    CreateRecipeIngredientListComponent,
    RecipeIngredientFromListCardComponent,
    RecipeIngredientsListComponent,

    CreateIngredientComponent,

    RecipeDetailsCardComponent,
    RecipesListComponent,
    CreateRecipeStepperComponent,
  ],
})
export class SharedModule {}

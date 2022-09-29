import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientDetailsCardComponent } from './components/ingredient-details-card/ingredient-details-card.component';
import { AllIngredientsPageComponent } from './pages/all-ingredients-page/all-ingredients-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { IngredientDetailsPageComponent } from './pages/ingredient-details-page/ingredient-details-page.component';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';
import { ApprovedIngredientsPageComponent } from './pages/approved-ingredients-page/approved-ingredients-page.component';
import { UnapprovedIngredientsPageComponent } from './pages/unapproved-ingredients-page/unapproved-ingredients-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateIngredientComponent } from './components/create-ingredient/create-ingredient.component';
import { CrudIngredientPageComponent } from './pages/crud-ingredient-page/crud-ingredient-page.component';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { GetIngredientComponent } from './components/get-ingredient/get-ingredient.component';
import { DeleteIngredientComponent } from './components/delete-ingredient/delete-ingredient.component';
import { UpdateIngredientComponent } from './components/update-ingredient/update-ingredient.component';
import { UpdateIngredientDetailsComponent } from './components/update-ingredient-details/update-ingredient-details.component';

@NgModule({
  declarations: [
    IngredientsListComponent,
    IngredientDetailsCardComponent,
    AllIngredientsPageComponent,
    IngredientDetailsPageComponent,
    IngredientDetailsComponent,
    ApprovedIngredientsPageComponent,
    UnapprovedIngredientsPageComponent,
    CrudIngredientPageComponent,
    CreateIngredientComponent,
    GetIngredientComponent,
    DeleteIngredientComponent,
    UpdateIngredientComponent,
    UpdateIngredientDetailsComponent,
  ],
  imports: [CommonModule, IngredientRoutingModule, CoreModule, SharedModule],
  exports: [
    AllIngredientsPageComponent,
    ApprovedIngredientsPageComponent,
    UnapprovedIngredientsPageComponent,
    IngredientDetailsPageComponent,
    CrudIngredientPageComponent,
    CreateIngredientComponent,
    GetIngredientComponent,
    UpdateIngredientComponent,
    UpdateIngredientDetailsComponent,
    DeleteIngredientComponent,
  ],
})
export class IngredientModule {}

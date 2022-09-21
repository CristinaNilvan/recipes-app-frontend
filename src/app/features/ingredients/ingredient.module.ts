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

@NgModule({
  declarations: [
    IngredientsListComponent,
    IngredientDetailsCardComponent,
    AllIngredientsPageComponent,
    IngredientDetailsPageComponent,
    IngredientDetailsComponent,
    ApprovedIngredientsPageComponent,
    UnapprovedIngredientsPageComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [
    AllIngredientsPageComponent,
    ApprovedIngredientsPageComponent,
    UnapprovedIngredientsPageComponent,
    IngredientDetailsPageComponent,
  ],
})
export class IngredientModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientDetailsCardComponent } from './components/ingredient-details-card/ingredient-details-card.component';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllIngredientsComponent } from './pages/all-ingredients/all-ingredients.component';

@NgModule({
  declarations: [
    IngredientsListComponent,
    IngredientDetailsCardComponent,
    IngredientDetailsComponent,
    AllIngredientsComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [AllIngredientsComponent],
})
export class IngredientsModule {}

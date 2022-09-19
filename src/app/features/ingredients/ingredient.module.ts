import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientDetailsCardComponent } from './components/ingredient-details-card/ingredient-details-card.component';
import { AllIngredientsListComponent } from './pages/all-ingredients-list/all-ingredients-list.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    IngredientsListComponent,
    IngredientDetailsCardComponent,
    AllIngredientsListComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [AllIngredientsListComponent],
})
export class IngredientModule {}

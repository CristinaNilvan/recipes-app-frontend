import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientDetailsCardComponent } from './components/ingredient-details-card/ingredient-details-card.component';

@NgModule({
  declarations: [IngredientsListComponent, IngredientDetailsCardComponent],
  imports: [CommonModule],
  exports: [IngredientsListComponent],
})
export class IngredientModule {}

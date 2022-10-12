import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientDetailsCardComponent } from './components/ingredient-details-card/ingredient-details-card.component';
import { CoreModule } from 'src/app/core/core.module';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';
import { ApprovedIngredientsPageComponent } from './pages/approved-ingredients-page/approved-ingredients-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    IngredientsListComponent,
    IngredientDetailsCardComponent,
    IngredientDetailsComponent,
    ApprovedIngredientsPageComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [ApprovedIngredientsPageComponent],
})
export class IngredientModule {}

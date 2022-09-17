import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsListComponent } from './ingredients/ingredients-list/ingredients-list.component';
import { IngredientDetailsCardComponent } from './ingredients/ingredient-details-card/ingredient-details-card.component';

@NgModule({
  declarations: [AppComponent, IngredientsListComponent, IngredientDetailsCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

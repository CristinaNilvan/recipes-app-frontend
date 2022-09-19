import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipe.module';
import { IngredientModule } from './ingredients/ingredient.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RecipeModule, IngredientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

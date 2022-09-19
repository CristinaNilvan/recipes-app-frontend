import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './features/recipes/recipe.module';
import { IngredientModule } from './features/ingredients/ingredient.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, RecipeModule, IngredientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

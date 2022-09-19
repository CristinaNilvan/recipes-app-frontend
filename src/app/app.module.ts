import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipe.module';
import { IngredientModule } from './ingredients/ingredient.module';
import { NavbarComponent } from './page-components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, RecipeModule, IngredientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

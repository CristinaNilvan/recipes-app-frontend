import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeIngredient } from '../models/get-models/recipe-ingredient';
import { RecipeIngredientPost } from '../models/post-models/recipe-ingredient-post';

@Injectable({
  providedIn: 'root',
})
export class RecipeIngredientService {
  url = '/api/recipe-ingredients/';

  constructor(private httpService: HttpClient) {}

  createRecipeIngredient(
    recipeIngredient: RecipeIngredientPost
  ): Observable<RecipeIngredient> {
    return this.httpService.post<RecipeIngredient>(this.url, recipeIngredient);
  }
}

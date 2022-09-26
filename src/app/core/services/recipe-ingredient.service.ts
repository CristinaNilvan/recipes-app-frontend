import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeIngredientService {
  url = '/api/recipe-ingredients/';

  constructor(private httpService: HttpClient) {}
}

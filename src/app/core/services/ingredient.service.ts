import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ingredient } from 'src/app/core/models/ingredient';
import { Observable } from 'rxjs';
import { IngredientPost } from '../models/post-models/ingredient-post';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  url = '/api/ingredients/';

  constructor(private httpService: HttpClient) {}

  createIngredient(ingredient: IngredientPost): Observable<Ingredient> {
    return this.httpService.post<Ingredient>(this.url, ingredient);
  }

  getIngredientById(id: number): Observable<Ingredient> {
    const url = `${this.url}${id}`;
    return this.httpService.get<Ingredient>(url);
  }

  getIngredientByName(name: string): Observable<Ingredient> {
    const url = `${this.url}${name}`;
    return this.httpService.get<Ingredient>(url);
  }

  getAllIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const url = this.url + 'all-ingredients';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(url, { params });
  }

  getApprovedIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(this.url, { params });
  }

  getUnapprovedIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const url = this.url + 'unapproved-ingredients';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(url, { params });
  }

  patchIngredient(id: number, ingredient: IngredientPost): Observable<{}> {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    // };

    const url = `${this.url}${id}`;
    return this.httpService.patch(url, ingredient);
  }

  deleteIngredient(id: number): Observable<{}> {
    const url = `${this.url}${id}`;
    return this.httpService.delete(url);
  }
}

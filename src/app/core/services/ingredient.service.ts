import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { Observable } from 'rxjs';
import { IngredientPost } from '../models/post-models/ingredient-post';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  baseUrl = '/api/ingredients/';

  constructor(private httpService: HttpClient) {}

  createIngredient(ingredient: IngredientPost): Observable<Ingredient> {
    return this.httpService.post<Ingredient>(this.baseUrl, ingredient);
  }

  getIngredientById(id: number): Observable<Ingredient> {
    const url = `${this.baseUrl}${id}`;
    return this.httpService.get<Ingredient>(url);
  }

  getIngredientByName(name: string): Observable<Ingredient> {
    const url = `${this.baseUrl}${name}`;
    return this.httpService.get<Ingredient>(url);
  }

  getAllIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const url = this.baseUrl + 'all-ingredients';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(url, { params });
  }

  getApprovedIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const url = this.baseUrl + 'approved-ingredients';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(url, { params });
  }

  getUnapprovedIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const url = this.baseUrl + 'unapproved-ingredients';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(url, { params });
  }

  patchIngredient(id: number, ingredient: IngredientPost): Observable<{}> {
    const url = `${this.baseUrl}${id}`;
    return this.httpService.patch(url, ingredient);
  }

  approveIngredient(id: number): Observable<{}> {
    const url = `${this.baseUrl}unapproved-ingredients/${id}`;
    return this.httpService.patch(url, null);
  }

  deleteIngredient(id: number): Observable<{}> {
    const url = `${this.baseUrl}${id}`;
    return this.httpService.delete(url);
  }

  addImageToIngredient(id: number, formData: FormData): Observable<{}> {
    const url = `${this.baseUrl}${id}/image`;
    return this.httpService.post(url, formData);
  }
}

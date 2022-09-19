import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ingredient } from 'src/app/core/models/ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private httpService: HttpClient) {}

  getIngredient(id: number): Observable<Ingredient> {
    const url = `/api/ingredients/${id}`;
    return this.httpService.get<Ingredient>(url);
  }

  getAllIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const url = `/api/ingredients/all-ingredients?PageNumber=${pageNumber}&PageSize=${pageSize}`;

    return this.httpService.get<Ingredient[]>(url);
  }
}

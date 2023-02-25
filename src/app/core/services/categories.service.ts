import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { GenericResponse } from '../interfaces/apiResponse';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _api: ApiService) {}

  public getCategories(): Observable<GenericResponse<{categories:Category[]}>> {
    return this._api.get('categories');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesArray } from '../interfaces/productCategories';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _api: ApiService) {}

  public getCategories(): Observable<CategoriesArray> {
    return this._api.get('categories');
  }
}

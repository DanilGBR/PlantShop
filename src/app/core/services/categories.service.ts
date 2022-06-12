import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _api: ApiService) {}

  public getCategories(): Observable<{
    message: string;
    categories: Category[];
  }> {
    return this._api.get('categories');
  }
}

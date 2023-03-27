import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _api: ApiService) {}

  public getProducts(): Observable<{
    products: Product[];
  }> {
    return this._api.get('products');
  }
}

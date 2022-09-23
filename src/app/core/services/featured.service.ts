import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FeaturedService {
  constructor(private _api: ApiService) {}

  public getFeatured(): Observable<{
    message: string;
    featuredProducts: Product[];
  }> {
    return this._api.get('featured');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturedProduct } from '../interfaces/featuredProduct';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FeaturedService {
  constructor(private _api: ApiService) {}

  public getFeatured(): Observable<{
    message: string;
    featuredProducts: FeaturedProduct[];
  }> {
    return this._api.get('featured');
  }
}

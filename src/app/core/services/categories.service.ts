import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private plantCategories: Category[] = [
    {
      id: 1,
      description: 'Jungle plants',
      imageSource: '../../../../assets/categories/plant-jungle.jpg',
    },
    {
      id: 2,
      description: 'Outdoor plants',
      imageSource: '../../../../assets/categories/plant-outdoor.jpg',
    },
    {
      id: 3,
      description: 'Indoor plants',
      imageSource: '../../../../assets/categories/plant-indoor.jpg',
    },
    {
      id: 4,
      description: 'Bedroom plants',
      imageSource: '../../../../assets/categories/plant-bedroom.jpg',
    },
  ];
  constructor() {}

  public getCategories(): Observable<Category[]> {
    return of(this.plantCategories);
  }
}

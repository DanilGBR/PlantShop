import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private plantCategories: Category[] = [];
  constructor(private http: HttpClient) {}

  public getCategories() {
    return this.http
      .get<{ message: string; categories: Category[] }>(
        'http://localhost:3000/api/categories'
      )
      .subscribe(
        (postData) => {
          this.plantCategories = postData.categories;
          return of(this.plantCategories);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

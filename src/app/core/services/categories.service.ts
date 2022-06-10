import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private plantCategories: Category[] = [];
  private API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  public getCategories(): Observable<{
    message: string;
    categories: Category[];
  }> {
    return this.http.get<{ message: string; categories: Category[] }>(
      `${this.API_URL}/categories`
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  CategoriesArray,
  Category,
} from 'src/app/core/interfaces/productCategories';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ProductsStoreService } from 'src/app/core/services/products-store.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  public categories$!: Observable<Category[]>;
  constructor(
    private categoriesService: CategoriesService,
    private productsStore: ProductsStoreService
  ) {}

  ngOnInit(): void {
    // todo: move this to a separate method
    // this.categories$ = this.getCategories().pipe(map((res) => res.categories));
    this.productsStore.fetchProductCategories();
  }

  private getCategories(): Observable<CategoriesArray> {
    return this.categoriesService.getCategories();
  }
}

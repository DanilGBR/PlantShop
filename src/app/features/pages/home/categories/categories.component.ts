import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesStoreService } from 'src/app/core/services/categories-store.service';
import { Category } from 'src/app/core/interfaces/productCategories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  public categories$: Observable<Category[]> =
    this.categoriesStoreService.selectCategories();

  constructor(private categoriesStoreService: CategoriesStoreService) {}

  ngOnInit(): void {
    this.categoriesStoreService.fetchCategories();
  }
}

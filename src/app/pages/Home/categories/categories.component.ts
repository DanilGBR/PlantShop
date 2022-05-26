import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoriesService.getCategories().subscribe((result: Category[]) => {
      this.categories = result;
    });
  }
}

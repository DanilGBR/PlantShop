import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  public categories$!: Observable<Category[]>;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    // todo: move this to a separate method
    this.categories$ = this.getCategories().pipe(map((res) => res.categories));
  }

  private getCategories(): Observable<{
    message: string;
    categories: Category[];
  }> {
    return this.categoriesService.getCategories();
  }
}

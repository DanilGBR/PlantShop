import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css'],
})
export class CategoryItemComponent implements OnInit {
  @Input()
  item!: Category;

  constructor() {}

  ngOnInit(): void {}
}

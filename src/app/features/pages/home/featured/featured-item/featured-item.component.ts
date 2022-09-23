import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css'],
})
export class FeaturedItemComponent implements OnInit {
  @Input() listItem!: Product;
  constructor() {}

  ngOnInit(): void {}
}

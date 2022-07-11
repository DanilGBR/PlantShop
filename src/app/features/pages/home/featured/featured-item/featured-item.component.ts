import { Component, Input, OnInit } from '@angular/core';
import { FeaturedProduct } from 'src/app/core/interfaces/featuredProduct';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css'],
})
export class FeaturedItemComponent implements OnInit {
  @Input() listItem!: FeaturedProduct;
  constructor() {}

  ngOnInit(): void {}
}

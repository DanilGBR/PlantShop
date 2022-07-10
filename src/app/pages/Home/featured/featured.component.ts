import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit {
  featuredList: Array<{
    //todo: accessors
    id: number;
    description: string;
    imageSource: string;
    price: number;
  }> = [
    {
      id: 1,
      description: 'Jungle plants',
      imageSource: '../../../assets/categories/plant-jungle.jpg',
      price: 100,
    },
    {
      id: 2,
      description: 'Outdoor plants',
      imageSource: '../../../assets/categories/plant-jungle.jpg',
      price: 100,
    },
    {
      id: 3,
      description: 'Indoor plants',
      imageSource: '../../../assets/categories/plant-jungle.jpg',
      price: 100,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

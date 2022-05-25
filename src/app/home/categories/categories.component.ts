import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  plantList: Array<{ id: number; description: string; imageSource: string }> = [
    {
      id: 1,
      description: 'Jungle plants',
      imageSource: '../../../../assets/categories/plant-jungle.jpg',
    },
    {
      id: 2,
      description: 'Outdoor plants',
      imageSource: '../../../../assets/categories/plant-jungle.jpg',
    },
    {
      id: 3,
      description: 'Indoor plants',
      imageSource: '../../../../assets/categories/plant-jungle.jpg',
    },
    {
      id: 4,
      description: 'Bedroom plants',
      imageSource: '../../../../assets/categories/plant-jungle.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

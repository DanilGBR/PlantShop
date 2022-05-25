import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  plantList: Array<{
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
}

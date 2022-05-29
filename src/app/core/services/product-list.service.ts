import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  //!Source: https://en.wikipedia.org/wiki/List_of_plants_by_common_name
  public productList: Product[] = [
    {
      name: 'Alder',
      species: 'Alnus',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Black alder',
      species: 'Alnus glutinosa, Ilex verticillata',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Common alder',
      species: 'Alnus glutinosa',
      price: 100,
      quantity: 10,
    },
    {
      name: 'False alder',
      species: 'Ilex verticillata',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Gray alder',
      species: 'Alnus incana',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Speckled alder',
      species: 'Alnus incana',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Striped alder',
      species: 'Ilex verticillata',
      price: 100,
      quantity: 10,
    },
    {
      name: 'White alder',
      species: 'Alnus incana, Ilex verticillata',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Almond',
      species: 'Prunus amygdalus',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Tall ambrosia',
      species: 'Ambrosia trifida',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Amy root',
      species: 'Apocynum cannabinum',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Apple',
      species: 'Malus domestica',
      price: 100,
      quantity: 10,
    },
    {
      name: 'apple',
      species: 'Maclura pomifera',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Apple of Sodom',
      species: 'Solanum carolinense',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Apricot',
      species: 'Prunus armeniaca',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Arfaj',
      species: 'Rhanterium epapposum',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Arizona sycamore',
      species: 'Platanus wrighitii',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Arrowwood',
      species: 'Cornus florida',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Indian arrowwood',
      species: 'Cornus florida',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Ash',
      species: 'Fraxinus spp.',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Black ash',
      species: 'Acer negundo, Fraxinus nigra',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Blue ash',
      species: 'Fraxinus pennsylvanica',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Cane ash',
      species: 'Fraxinus americana',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Green ash',
      species: 'Fraxinus pennsylvanica',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Maple ash',
      species: 'Acer negundo',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Red ash',
      species: 'Fraxinus pennsylvanica',
      price: 100,
      quantity: 10,
    },
    {
      name: 'River ash',
      species: 'Fraxinus pennsylvanica',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Swamp ash',
      species: 'Fraxinus pennsylvanica',
      price: 100,
      quantity: 10,
    },
    {
      name: 'White ash',
      species: 'Fraxinus americana',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Water ash',
      species: 'Acer negundo, Fraxinus pennsylvanica',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Azolla',
      species: 'Azolla',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Carolina azolla',
      species: 'Azolla caroliniana',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Bamboo',
      species: 'Bambuseae',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Banana',
      species:
        'mainly Musa × paradisica, but also other Musa species and hybrids',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Baobab',
      species: 'Adansonia',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Bay',
      species: 'Laurus spp. or Umbellularia spp.',
      price: 100,
      quantity: 10,
    },
    {
      name: 'Bay laurel',
      species: 'Laurus nobilis (culinary)',
      price: 100,
      quantity: 10,
    },
    {
      name: 'California bay',
      species: 'Umbellularia californica',
      price: 100,
      quantity: 10,
    },
  ];

  constructor() {}
}

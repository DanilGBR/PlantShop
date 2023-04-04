export interface Category {
  category: string; // rename into name
  imageSource: string;
}

export interface CategoriesArray {
  // todo: no need for ''categoryarray', we already have []
  categories: Category[];
}

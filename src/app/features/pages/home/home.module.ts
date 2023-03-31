import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './articles/article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';
import { FeaturedItemComponent } from './featured/featured-item/featured-item.component';
import { FeaturedComponent } from './featured/featured.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { QuoteComponent } from './quote/quote.component';

const components = [
  HomeComponent,
  IntroComponent,
  CategoriesComponent,
  FeaturedComponent,
  ArticlesComponent,
  CategoryItemComponent,
  QuoteComponent,
  FeaturedItemComponent,
  ArticleComponent,
];
const modules = [CommonModule, HomeRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class HomeModule {}

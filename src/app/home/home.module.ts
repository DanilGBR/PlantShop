import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedComponent } from './featured/featured.component';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    CategoriesComponent,
    FeaturedComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

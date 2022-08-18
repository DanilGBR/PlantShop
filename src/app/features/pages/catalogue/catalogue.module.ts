import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { IntroComponent } from './intro/intro.component';
import { ProductComponent } from './catalogue/product/product.component';
import { FilterSidebarComponent } from './catalogue/filter-sidebar/filter-sidebar.component';

@NgModule({
  declarations: [CatalogueComponent, IntroComponent, ProductComponent, FilterSidebarComponent],
  imports: [CommonModule, CatalogueRoutingModule],
})
export class CatalogueModule {}

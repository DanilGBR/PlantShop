import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { IntroComponent } from './intro/intro.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [CatalogueComponent, IntroComponent, ProductComponent],
  imports: [CommonModule, CatalogueRoutingModule],
})
export class CatalogueModule {}

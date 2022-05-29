import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, PageNotFoundComponent, FooterComponent],
})
export class SharedModule {}

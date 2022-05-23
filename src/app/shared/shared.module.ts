import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, PageNotFoundComponent],
})
export class SharedModule {}

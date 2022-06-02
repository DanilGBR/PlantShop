import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent, FooterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}

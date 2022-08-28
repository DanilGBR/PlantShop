import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceptModalComponent } from './modals/accept-modal/accept-modal.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const components = [
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent,
  AcceptModalComponent,
  ContactUsComponent,
];
@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [...components, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}

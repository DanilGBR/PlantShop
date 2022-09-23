import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home/home.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'catalogue',
    loadChildren: () =>
      import('./features/pages/catalogue/catalogue.module').then(
        (m) => m.CatalogueModule
      ),
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

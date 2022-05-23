import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './shared/PageNotFound/PageNotFound.component';
import { IntroAppComponent } from './Home/intro-app/intro-app.component';
import { CategoriesAppComponent } from './Home/categories-app/categories-app.component';
import { FeaturedAppComponent } from './Home/featured-app/featured-app.component';
import { ArticlesAppComponent } from './Home/articles-app/articles-app.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroAppComponent,
    CategoriesAppComponent,
    FeaturedAppComponent,
    ArticlesAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

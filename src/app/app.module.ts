import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ReturnPolicyComponent } from './features/pages/resources/return-policy/return-policy.component';
import { TrackAndOrderComponent } from './features/pages/resources/track-and-order/track-and-order.component';
import { FaqsComponent } from './features/pages/resources/faqs/faqs.component';
import { PrivacyPolicyComponent } from './features/pages/resources/privacy-policy/privacy-policy.component';
import { CareersComponent } from './features/pages/about/careers/careers.component';
import { HttpClientModule } from '@angular/common/http';
import { OurStoryComponent } from './features/pages/about/our-story/our-story.component';
import { PressComponent } from './features/pages/about/press/press.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './features/auth/store/effects/auth.effects';
import { authReducer } from './features/auth/store/reducers/auth.reducer';
import { ProductEffects } from './features/pages/catalogue/catalog-store/effects/products.effects';
import { productsReducer } from './features/pages/catalogue/catalog-store/reducers/products.reducer';
import { ArticlesEffects } from './features/pages/home/home-store/effects/articles.effects';
import { CategoriesEffects } from './features/pages/home/home-store/effects/categories.effects';
import { FeaturedProductsEffects } from './features/pages/home/home-store/effects/featured.effects';
import { articlesReducer } from './features/pages/home/home-store/reducers/articles.reducer';
import { categoryReducer } from './features/pages/home/home-store/reducers/categories.reducer';
import { featuredProductsReducer } from './features/pages/home/home-store/reducers/featured.reducer';

const components = [
  AppComponent,
  ReturnPolicyComponent,
  TrackAndOrderComponent,
  FaqsComponent,
  PrivacyPolicyComponent,
  OurStoryComponent,
  CareersComponent,
  PressComponent,
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  RouterModule,
  SharedModule,
  CoreModule,
  HttpClientModule,
  OverlayModule,
];

const reducers = {
  auth: authReducer,
  categories: categoryReducer,
  featuredProducts: featuredProductsReducer,
  articles: articlesReducer,
  products: productsReducer,
};

const effects = [
  AuthenticationEffects,
  CategoriesEffects,
  FeaturedProductsEffects,
  ArticlesEffects,
  ProductEffects,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

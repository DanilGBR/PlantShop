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

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './app-store/reducers/categories.reducer';
import { CategoriesEffects } from './app-store/effects/categories.effects';
import { authReducer } from './features/auth/store/reducers/auth.reducer';
import { featuredProductsReducer } from './app-store/reducers/featured.reducer';
import { FeaturedProductsEffects } from './app-store/effects/featured.effects';
import { ArticlesEffects } from './app-store/effects/articles.effects';
import { articlesReducer } from './app-store/reducers/articles.reducer';

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
  categories: categoryReducer,
  featuredProducts: featuredProductsReducer,
  articles: articlesReducer,
  auth: authReducer,
};

const effects = [CategoriesEffects, FeaturedProductsEffects, ArticlesEffects];
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

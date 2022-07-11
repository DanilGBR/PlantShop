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

@NgModule({
  declarations: [
    AppComponent,
    ReturnPolicyComponent,
    TrackAndOrderComponent,
    FaqsComponent,
    PrivacyPolicyComponent,
    OurStoryComponent,
    CareersComponent,
    PressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

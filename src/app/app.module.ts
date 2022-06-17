import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ReturnPolicyComponent } from './pages/Resources/return-policy/return-policy.component';
import { TrackAndOrderComponent } from './pages/Resources/track-and-order/track-and-order.component';
import { FaqsComponent } from './pages/Resources/faqs/faqs.component';
import { PrivacyPolicyComponent } from './pages/Resources/privacy-policy/privacy-policy.component';
import { OurStoryComponent } from './pages/About/our-story/our-story.component';
import { CareersComponent } from './pages/About/careers/careers.component';
import { PressComponent } from './pages/About/press/press.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

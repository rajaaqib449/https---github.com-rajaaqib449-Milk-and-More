import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminViewComponent } from './Layouts/adminLayout/admin-view/admin-view.component';
import { LandingViewComponent } from './Layouts/landing-layout/landing-view/landing-view.component';

import { NotFoundPageComponent } from './commonComponents/not-found-page/not-found-page.component';
import { ServerUnavailbleComponent } from './commonComponents/server-unavailble/server-unavailble.component';
import { HeaderComponent } from './Layouts/landing-layout/components/header/header.component';
import { FooterComponent } from './Layouts/landing-layout/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    HeaderComponent,
    FooterComponent,
    LandingViewComponent,
    NotFoundPageComponent,
    ServerUnavailbleComponent,
 
 
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,

    NgImageSliderModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

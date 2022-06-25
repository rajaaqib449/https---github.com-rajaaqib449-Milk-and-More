import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingModuleRoutingModule } from './landing-module-routing.module';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { CrousalComponent } from './pages/main-home/home-components/crousal/crousal.component';
import { ServiesComponent } from './pages/main-home/home-components/servies/servies.component';
import { FreshMilkComponent } from './pages/main-home/home-components/fresh-milk/fresh-milk.component';
import { AboutUsComponent } from './pages/main-home/home-components/about-us/about-us.component';
import { ProductsComponent } from './pages/main-home/home-components/products/products.component';
import { FeaturedRecicpeComponent } from './pages/main-home/home-components/featured-recicpe/featured-recicpe.component';
import { BannerComponent } from './pages/main-home/home-components/banner/banner.component';
import { OurShopComponent } from './pages/main-home/home-components/our-shop/our-shop.component';
import { TeamsComponent } from './pages/main-home/home-components/teams/teams.component';
import { BlogComponent } from './pages/main-home/home-components/blog/blog.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainHomeComponent,
    CrousalComponent,
    ServiesComponent,
    FreshMilkComponent,
    AboutUsComponent,
    ProductsComponent,
    FeaturedRecicpeComponent,
    BannerComponent,
    OurShopComponent,
    TeamsComponent,
    BlogComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    LandingModuleRoutingModule,
    CarouselModule,

    
  ]
})
export class LandingModuleModule { }

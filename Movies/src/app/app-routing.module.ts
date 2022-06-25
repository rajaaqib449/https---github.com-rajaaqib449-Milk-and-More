import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './Layouts/adminLayout/admin-view/admin-view.component';
import { LandingViewComponent } from './Layouts/landing-layout/landing-view/landing-view.component';


const routes: Routes = [
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },

{
  path:"home",
  component:LandingViewComponent,
  children :[
    {
      path:"",loadChildren:()=>import("./Modules/landing-module/landing-module.module").then((m)=>m.LandingModuleModule),//as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of page & real funcationlity of lazyloading is distrubed.....

    },
  ]
},
{
  path:"admin",
  component:AdminViewComponent,
  children :[
    {
      path:"",loadChildren:()=>import("./Modules/admin-module/admin-module.module").then((m)=>m.AdminModuleModule),//as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of page & real funcationlity of lazyloading is distrubed.....

    },
  ]
}

  ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

}

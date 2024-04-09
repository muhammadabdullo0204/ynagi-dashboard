import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IconsComponent } from './icons/icons.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { YangiDashboardComponent } from './yangi-dashboard/yangi-dashboard.component';


const routes: Routes = [

  {path: '', redirectTo:'/yangidashboard', pathMatch:'full'},
  // {path:'home', component:NewDashboardComponent},
    {path:'yangidashboard', component:YangiDashboardComponent},
  {path:'badge', component:BadgeComponent},
  {path:'chips', component:ChipsComponent},
  {path:'lists', component:ListsComponent},
  {path:'menu', component:MenuComponent},
  {path:'tooltips', component:TooltipsComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'icons', component:IconsComponent},
  {path:'sample', component:SamplePageComponent},
  {path:'**' ,  component:ErrorPageComponent}
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

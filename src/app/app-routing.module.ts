import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {FullComponent} from "./components/layouts/full/full.component";
import { AlertsComponent } from "./components/core/alerts/alerts.component";
import { FormsComponent } from "./components/core/forms/forms.component";
import { ProductComponent } from "./components/dashboard/product/product.component";
import { GridListComponent } from "./components/core/grid-list/grid-list.component";
import { MenuComponent } from "./components/core/menu/menu.component";
import { TabsComponent } from "./components/core/tabs/tabs.component";
import { ExpansionComponent } from "./components/core/expansion/expansion.component";
import { ChipsComponent } from "./components/core/chips/chips.component";
import { ProgressComponent } from "./components/core/progress/progress.component";
import { ToolbarComponent } from "./components/core/toolbar/toolbar.component";
import { ProgressSnipperComponent } from "./components/core/progress-snipper/progress-snipper.component";
import { SnackbarComponent } from "./components/core/snackbar/snackbar.component";
import { SliderComponent } from "./components/core/slider/slider.component";
import { SlideToggleComponent } from "./components/core/slide-toggle/slide-toggle.component";
import { TooltipsComponent } from "./components/core/tooltips/tooltips.component";
import { ButtonsComponent } from "./components/core/buttons/buttons.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginRegisterGuard } from './_guards/login-register.guard';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent, canActivate: [AuthGuard]},
      {path:"alerts", component:AlertsComponent, canActivate: [AuthGuard]},
      {path:"forms", component:FormsComponent, canActivate: [AuthGuard]},
      {path:"table", component:ProductComponent, canActivate: [AuthGuard]},
      {path:"grid-list", component:GridListComponent, canActivate: [AuthGuard]},
      {path:"menu", component:MenuComponent, canActivate: [AuthGuard]},
      {path:"tabs", component:TabsComponent, canActivate: [AuthGuard]},
      {path:"expansion", component:ExpansionComponent, canActivate: [AuthGuard]},
      {path:"chips", component:ChipsComponent, canActivate: [AuthGuard]},
      {path:"progress", component:ProgressComponent, canActivate: [AuthGuard]},
      {path:"toolbar", component:ToolbarComponent, canActivate: [AuthGuard]},
      {path:"progress-snipper", component:ProgressSnipperComponent, canActivate: [AuthGuard]},
      {path:"snackbar", component:SnackbarComponent, canActivate: [AuthGuard]},
      {path:"slider", component:SliderComponent, canActivate: [AuthGuard]},
      {path:"slide-toggle", component:SlideToggleComponent, canActivate: [AuthGuard]},
      {path:"tooltip", component:TooltipsComponent, canActivate: [AuthGuard]},
      {path:"button", component:ButtonsComponent, canActivate: [AuthGuard]},
    ]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoginRegisterGuard]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [LoginRegisterGuard]
  },
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

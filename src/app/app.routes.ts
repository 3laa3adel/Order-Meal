import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenupageComponent } from './components/menupage/menupage.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'menu/:id',component:MenupageComponent},
    {path:'about',component:AboutComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
];

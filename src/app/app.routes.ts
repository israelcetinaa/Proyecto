import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RegisterUserComponent } from "./components/register-user/register-user.component";

export const ROUTES: Routes = [
    {path:'login', component: RegisterUserComponent},
    {path:'home', component:HomeComponent},
    {path:'', pathMatch:'full', redirectTo:'login'},
    {path:'**', pathMatch:'full', redirectTo:'login'}
];
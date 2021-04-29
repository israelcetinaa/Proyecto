import { Routes } from "@angular/router";
import { AddProductsComponent } from "./components/add-products/add-products.component";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { RegisterUserComponent } from "./components/register-user/register-user.component";

export const ROUTES: Routes = [
    {path:'login', component: RegisterUserComponent},
    {path:'home', component:HomeComponent},
    {path:'add', component:AddProductsComponent},
    {path:'view', component:ProductListComponent},
    {path:'', pathMatch:'full', redirectTo:'login'},
    {path:'**', pathMatch:'full', redirectTo:'login'}
];
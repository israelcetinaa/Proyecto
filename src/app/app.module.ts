import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from "@angular/forms";
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { DeleteProductsComponent } from './components/delete-products/delete-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HomeComponent,
    ProductListComponent,
    AddProductsComponent,
    DeleteProductsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

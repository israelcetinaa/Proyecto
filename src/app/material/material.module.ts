import { NgModule } from '@angular/core';
//aquí importar los modulos de material que se vayan a utilizar
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';  
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatIconModule,
  MatTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule
];
@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

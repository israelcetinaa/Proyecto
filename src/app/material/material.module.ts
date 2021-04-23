import { NgModule } from '@angular/core';
//aquí importar los modulos de material que se vayan a utilizar
import { MatButtonModule } from "@angular/material/button";

const MaterialComponents = [
  MatButtonModule
];
@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

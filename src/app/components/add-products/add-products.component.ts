import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { VideoJuegos } from "../../models/data.interface";
import { ProductsService } from "../../services/products.service";


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
    public data: VideoJuegos;

  constructor( 
        private product: ProductsService
    ) { 
    this.data={
    name: "",
    clasification: "",
    year: "",
    type: ""
    }
   }

  ngOnInit(): void {
    
  }

  cancelFunct(){
    this.data={
    name: "",
    clasification: "",
    year: "",
    type: ""
    }
  }

  confirmFunct(){
    this.product.addArray(this.data);
    console.log("botón confirmar accionado")
    this.data={
    name: "",
    clasification: "",
    year: "",
    type: ""
    }
  }

}

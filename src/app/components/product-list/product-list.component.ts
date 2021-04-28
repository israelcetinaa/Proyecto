import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { VideoJuegos } from "../../models/data.interface";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  public gameData: Array<VideoJuegos> = [];
  displayedColumns: string[] = ['name', 'clasification', 'year', 'type'];
  dataSource = this.gameData;
  
  constructor(
    private dateServ: ProductsService
  ){ 
    this.gameData = [];
   }

  ngOnInit(){
    this.dateServ.getGames$().subscribe( games => {
      this.gameData = games;
      console.warn("subscribe al servicio hecho");
      console.warn(this.gameData);
    });
    
  }

  
}


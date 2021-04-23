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
  public displayedColumns: string[] = ['name', 'clasification', 'year', 'type'];
  private gameData: Array<VideoJuegos> = [];
  public  dataSource = this.gameData;
  constructor(
    private dateServ: ProductsService
  ){
    this.gameData[0] = {
      name : '',
      clasification : '',
      year: '',
      type: ''
    };
  }

  ngOnInit(){
    
  }
    
}


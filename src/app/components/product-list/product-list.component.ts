import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { VideoJuegos } from "../../models/data.interface";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges, DoCheck{

  public gameData: Array<VideoJuegos> = [];
  gameSource: VideoJuegos[] = [];
  displayedColumns: string[] = ['name', 'clasification', 'year', 'type'];
  dataSource: MatTableDataSource<VideoJuegos>;

  
  
  constructor(
    private dateServ: ProductsService
  ){ 
    this.gameData = [];
    this.dataSource = new MatTableDataSource<VideoJuegos>(this.gameSource);
    console.log(this.dataSource.data);
   }


  ngOnChanges(){
    
  } 

  ngOnInit(){
    
  }

  ngDoCheck(){
    this.dateServ.getGames$().subscribe( games => {
      this.gameSource = games;
      console.warn(this.gameSource);
      console.warn(this.dataSource.data)
    });
  }
  
}


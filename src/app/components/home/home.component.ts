import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title:string = "Proyecto Webapp";
  public subtitle: string = "Gestiona tu lista de videojuegos";
  public state:boolean;

  constructor() { 
    this.state = false;
  }

  ngOnInit(): void {
  }

}

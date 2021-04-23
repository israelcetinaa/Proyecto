import { Injectable } from '@angular/core';
import { VideoJuegos } from "../models/data.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private games: Array<VideoJuegos> = [];   
  constructor() {
    this.games[0] = {
      name : 'Devil may cry 5',
      clasification : 'PEGI +18',
      year: '2019',
      type: 'RPG - H&S'
    };
   }

   

}

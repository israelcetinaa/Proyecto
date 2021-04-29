import { Injectable } from '@angular/core';
import { VideoJuegos } from "../models/data.interface";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private games: VideoJuegos[]; 
  private games$: Subject<VideoJuegos[]>;

 
  constructor() {
    this.games = [];
    this.games$ = new Subject();
   }

  addArray(data:VideoJuegos){
    this.games.push(data);
    this.games$.next(this.games);
  }   

  getGames$(): Observable<VideoJuegos[]>{
    return this.games$.asObservable();
  }

  deleteArray(index:string){
    this.games.splice(parseInt(index),1);
    this.games$.next(this.games);
  }

}

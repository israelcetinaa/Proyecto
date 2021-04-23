import { Injectable } from '@angular/core';
import { UserI } from "../models/user.interface";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

 private users: Array<UserI> = [];  
 
  constructor(
    private _route:ActivatedRoute,
    private _router: Router
  ) {

    this.users[0] = {
      email : 'prueba@prueba.com',
      password : '123456'
    };

   }

  loginByEmail(user: UserI){
     if (user.email == this.users[0].email && user.password == this.users[0].password){
      this._router.navigate(['home']);
   }
  }
}
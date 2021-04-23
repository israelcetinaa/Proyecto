import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/models/user.interface';
import { LoginService } from "../../services/login.service";
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public usuario: UserI;

  constructor(
    private logServ: LoginService
  ) {
    this.usuario = {
      email : "",
      password : ""
    }
   }

  ngOnInit(): void {
    
  }

  singIn(){
    console.log(this.usuario);
    this.logServ.loginByEmail(this.usuario);

  }
}

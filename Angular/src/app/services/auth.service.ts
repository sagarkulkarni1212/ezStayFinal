import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url ="https://mean-token-authentication.herokuapp.com/api/login";

  register(user){
    localStorage.setItem("user", JSON.stringify(user));
  }

  login(userData): boolean{
    
    let user = JSON.parse(localStorage.getItem("user"));    
    if(userData.email==user.email && userData.password==user.password){
      return true;
    }else{
      return false;
    }
  }

  getToken(){
    return localStorage.getItem("token");
  }

  checkToken():boolean{
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  logout(){

  }


}

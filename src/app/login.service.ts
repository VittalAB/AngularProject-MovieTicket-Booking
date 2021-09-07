import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = [
    {
    "fname": 'a', "lname": 'a',"username": "a"
  }
  ];


  addlogin(fname:string,lname:string,uname:string){
    this.user.push({"fname":fname,"lname":lname,"username":uname})
  }

  getlogin(){
    return this.user
  }
  
  constructor() { }
}

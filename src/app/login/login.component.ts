import { Component, OnInit ,Input} from '@angular/core';
import { EmailValidator } from '@angular/forms';
import {Router} from '@angular/router'
// import { isNumber } from 'util';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fname: '' = "";
  lname: '' = "";
  username:''="";
  pwd:''="";
  S:boolean = false
  age!: number; 
  email!: string;

  public users : any

  // cno!: number;
  constructor(private route : Router,private xservice : LoginService){}

  onlogin(){
    // if(this.fname!='' && this.lname!=''  && this.username!='' && this.pwd!='' && this.email!='' && this.age!=0)
    // {
      
    //   this.S=true
    //   this.xservice.addlogin(this.fname,this.lname,this.username)
    //   this.route.navigate(['home'])
    // }
    // else
    // {
    //   this.S=false
    // }

    

    this.users = this.xservice.getlogin();
    let check = 0;


    for(let i=0;i<this.users.length;i++){
      if(this.users[i].username == this.username  && this.S==true){
        check = 1;
        this.route.navigate(['home']);
      }

    } 
    
    if(check == 0 || this.S!=true){
      alert("Invalid username and password")
    }

  }

  reg(){
    if(this.age < 18)
    {
      alert('Only above 18 are allowed pls check your age')
    }
    if(this.fname='')
    {
      alert('Invalid name ')
    }
    this.xservice.addlogin(this.fname,this.lname,this.username)
  }
  check(){
    if(this.fname!='' || this.lname!=''  || this.username!='' || this.pwd!='' &&  this.age >= 18)
    {
      this.S=true
    }
    else
    {
      this.S=false
    }
  }
  ngOnInit(): void {
  }
}


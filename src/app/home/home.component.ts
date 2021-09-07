import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { MovieService } from '../movie.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private xservice:LoginService,private mservice : MovieService) { }

  user = [{"fname":'ab',"lname":'a','username':'a'}]
  time!: string;
  alert = true
  ntt = false
  ntt1= false 
  ntt2  = false
  ntt3 = false

  getuser(){
     this.user = this.xservice.getlogin()
}

nav(){
  if(this.ntt)
  this.mservice.getselect('Cars','9 to 12 morning Show ')
  else
  this.mservice.getselect('Cars','9 to 12 night Show ')
  confirm('Movie Booked !')
  this.route.navigate(['movie']);
}

nav1(){
  if(this.ntt1)
  this.mservice.getselect('MR. Bean','9 to 12 morning Show ')
  else
  this.mservice.getselect('Mr.Bean','9 to 12 night Show ')
 confirm('Movie Booked !')
  this.route.navigate(['movie']);
}


nav2(){
  if(this.ntt2)
  this.mservice.getselect('Hero','9 to 12 morning Show ')
  else
  this.mservice.getselect('Hero','9 to 12 night Show ')
  confirm('Movie Booked !')
  this.route.navigate(['movie']);
}


nav3(){
  if(this.ntt3)
  this.mservice.getselect('DDLJ','9 to 12 morning Show ')
  else
  this.mservice.getselect('DDLJ','9 to 12 night Show ')
  confirm('Movie Booked !')
  this.route.navigate(['movie']);
}

add1time(){
this.ntt = true
}

add2time(){
  this.ntt1 = true
  }

add3time(){
  this.ntt2 = true
  }
add4time(){
  this.ntt3 = true
  }

  ngOnInit(): void {
    }

   

}

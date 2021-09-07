import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  amt : number = 0
  constructor() { }
  mname!: string [];
  date = new Date;
  Timing!: string [];
  select = [
    {"mname":'',"timing":'Movies booked by you '}
  ];

  getselect(xmname:string,xtiming:string){
    this.select.push({"mname":xmname,"timing":xtiming})
    this.amt = this.amt + 200
  }
  getamt(){
    return this.amt
  }
  getmovie(){
    return this.select
  }
}

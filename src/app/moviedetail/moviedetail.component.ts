import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  constructor(private mservice : MovieService) { }
  amt = false;
  a : any
  ngOnInit(): void {
  }

  active  = false
  movie = [
    {"mname":'',"timing":''}
  ]
  dis(){
    this.movie = this.mservice.getmovie()
    this.active = true
  }
  xamt(){
    this.a = this.mservice.getamt()
    this.amt = true
    if(this.amt && this.active)
    confirm('Thank you for Bokking Enjoy Movie !! : )')
  }
}

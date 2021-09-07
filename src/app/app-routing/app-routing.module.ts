import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';

const routes : Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'movie',component:MoviedetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  users:any
  products:any
  reviews:any
  constructor(private apiService:ApiService, private router:Router){

  }
  ngOnInit(): void {
    this.getStats();
  }
  onClick(){
    this.router.navigateByUrl('/login')
  }
  getStats(){
    this.apiService.getAllStats().subscribe(result=>{
      this.users = result.totalUsers
      this.products = result.totalProducts
      this.reviews = result.totalReviews
      console.log(result);
      
    })
  }
}

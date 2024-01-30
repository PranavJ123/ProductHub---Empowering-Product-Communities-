import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { productRequest } from '../model/productRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  username = ''
  name = ''
  brand = ''
  code = ''
  product: Array<productRequest> = []

  constructor(private apiService: ApiService, private router: Router) { }
  ngOnInit(): void {
    this.getAllProducts()
    this.getUserById(localStorage['authId'])
  }

  search() {
    var options = {
      name: this.name,
      brand: this.brand,
      code: this.code
    }
    this.apiService.getProductByCriteria(options).subscribe(result => {
      // console.log(result)
      this.product = result
    })
  }


  getAllProducts() {
    this.apiService.getProduct().subscribe(result => {
      console.log(result);
      this.product = result
    })
  }

  getUserById(id:number){
    var user = {
      uid:id
    }
    this.apiService.getUserById(user).subscribe(result=>{
      // console.log(result);
      this.username = result.firstName
    })
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}

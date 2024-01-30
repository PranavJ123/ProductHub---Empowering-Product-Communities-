import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { reviewRequest } from '../model/reviewRequest';
import { review } from '../model/review';
import { product } from '../model/product';
import { productRequest } from '../model/productRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  reviewRequests: Array<reviewRequest> = []
  reviews: Array<review> = []
  reviewRequestsWithProduct: Map<reviewRequest, productRequest> = new Map()
  reviewsWithProduct: Map<review, productRequest> = new Map()

  constructor(private apiService: ApiService,private router:Router) {}
  ngOnInit(): void {
    this.getReviewRequests()
    this.getReviews();
  }



  viewRequests(){
    
  let requestContainer = document.getElementById("request-status-content") as HTMLDivElement
  let reviewContainer = document.getElementById("review-status-content") as HTMLDivElement
    requestContainer.classList.remove('d-none')
    reviewContainer.classList.add('d-none')
  }

  viewReviews(){
    
  let requestContainer = document.getElementById("request-status-content") as HTMLDivElement
  let reviewContainer = document.getElementById("review-status-content") as HTMLDivElement
    requestContainer.classList.add('d-none')
    reviewContainer.classList.remove('d-none')
  }

  getReviewRequests() {
    var request = {
      uid: localStorage['authId']
    }
    this.apiService.getReviewRequestStatus(request).subscribe(result => {
      this.reviewRequests = result
      console.log(this.reviewRequests);
      for(const item of this.reviewRequests) {
        this.getProductById(item).subscribe(result => {
          this.reviewRequestsWithProduct.set(item, result); 
          console.log(this.reviewRequestsWithProduct);
        });
      }
    
    })
  }

  getReviews(){
    var request = {
      uid: localStorage['authId']
    }
    this.apiService.getReviews(request).subscribe(result => {
      this.reviews = result
      console.log(this.reviews);
      for(const review of this.reviews) {
        this.getProductById(review).subscribe(result => {
          this.reviewsWithProduct.set(review, result); 
          console.log(this.reviewsWithProduct);
        });
      }
    })
  }

  getProductById(request: reviewRequest) {
    return this.apiService.getProductById(request.productId)
  }

  
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { productRequest } from '../model/productRequest';
import { review } from '../model/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent {
  avgRating = ''
  review:Array<review> = []
  productRequest:productRequest | undefined
  id:any
  constructor(private route: ActivatedRoute, private apiService:ApiService){
    this.getProductId();
  }
  getProductId(){
    this.id = this.route.snapshot.queryParams['id']
    this.getProductDetails(this.id)
  }

  getProductDetails(id:number){
    this.apiService.getProductById(id).subscribe(result=>{
      console.log(result);
      this.productRequest = result
      this.getReviews();
    })
  }
  requestReview(){
    
    var request = {
      uid:parseInt(localStorage['authId']),
      productId:this.id
    }
    // console.log(request);
    this.apiService.requestForReview(request).subscribe(result=>{
      // console.log(result);
      alert(result.message)
    })
  }

  getReviews(){
    this.apiService.getReviewsByProductId(this.id).subscribe(result=>{
      for(const review of result){
        if(review.status == 1){
          this.review = result
          let totalRating = 0
          for(const item of this.review){
            totalRating += parseInt(item.ratings)
          }
          this.avgRating = (totalRating/this.review.length).toString()
          console.log(this.review);    
        }
      }
     
    })
  }
}

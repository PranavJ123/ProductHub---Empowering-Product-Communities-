import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.sass']
})
export class AddReviewComponent implements OnInit {
  selectedStar: any; 
  heading= '';
  message= '';
  error:string = ''
  id:any
  productId:any
  constructor(private route:ActivatedRoute,private apiService: ApiService,private router:Router){
    this.getReviewId()
  }
  ngOnInit(): void {
  }
  getReviewId(){
    this.id = this.route.snapshot.queryParams['id']
    this.productId = this.route.snapshot.queryParams['pid']
    console.log(this.id);
    console.log(this.productId);
    
    
  }
addReview() {
  console.log(this.selectedStar);
  if(this.heading === '' || this.message === '' || this.selectedStar === undefined){
    alert("Please Provide required details for add review")
  }
  else{

  
  var request = {
    review:{
      uid:localStorage['authId'],
      productId:this.productId,
      heading:this.heading,
      message:this.message,
      ratings:this.selectedStar
    },
    requestId:this.id
  }
  console.log(request);
  this.apiService.requestReview(request).subscribe(result=>{
    alert(result.message)
    console.log(result);
    this.router.navigateByUrl('/profile')
  })
}
}
validateInput(){
  if(this.message.length > 400){
    this.error = "Message exceeds maximum length of 400 characters";
    this.message = this.message.substr(0,400);
  }else{
    this.error=''
  }
}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})
export class AdminLoginComponent {
  email:'' | undefined
  password:'' | undefined

  constructor(private apiService:ApiService,private router:Router){}

  login(){
    console.log("hi");
    
    var user = {
      email:this.email,
      password:this.password
    }
    this.apiService.adminAuth(user).subscribe(result=>{
      console.log(result); 
      var authId = result.authId
      sessionStorage['authId'] = authId
      this.router.navigateByUrl('/admin/requests')
    })
  }
}

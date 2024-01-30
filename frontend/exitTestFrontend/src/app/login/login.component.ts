import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  email:'' | undefined
  password:'' | undefined

  constructor(private apiService:ApiService,private router:Router){}

  login(){
    
    var user = {
      email:this.email,
      password:this.password
    }
    this.apiService.login(user).subscribe(result=>{
      console.log(result); 
      var status = result.message.status
      var authId = result.user.id
      if(status === 200){
        this.router.navigateByUrl('/home')
        localStorage['authId'] = authId
      }else{
        alert("Invalid Credentials")
      }
    })
  }

}

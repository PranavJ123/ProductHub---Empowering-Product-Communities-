import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent {
  firstName = ''
  lastName = ''
  eml = ''
  password = ''
  confirmPassword = ''
  constructor(private apiService: ApiService, private router: Router) {
  }

  isValid() {
    console.log(this.firstName+this.lastName+this.eml+this.password+this.confirmPassword);
    
    if (this.firstName === '' || this.lastName === '' || this.eml === '' || this.password === '' || this.confirmPassword === '') {
      return false;
    }
    return true;
  }


  register() {
    
    if (this.isValid()) {
      console.log("hi");
      
      if (this.password == this.confirmPassword) {
        var user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.eml,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        console.log(user);
        
        this.apiService.register(user).subscribe(result => {
          console.log(result);
          var authId = result.user.id
          localStorage['authId'] = authId
          this.router.navigateByUrl("/home")
        })
      }
      else {
        alert("Password Not Matched")
      }
    }else{
      alert("Please provide required details. All fields are mandatory.");
    }
  }
}


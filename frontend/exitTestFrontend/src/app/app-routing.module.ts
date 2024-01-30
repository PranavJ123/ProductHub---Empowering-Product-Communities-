import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewComponent } from './review/review.component';
import { ProfileComponent } from './profile/profile.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { RequestsComponent } from './admin/requests/requests.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminAuthGuard } from './services/admin-auth.guard';

const routes: Routes = [
  
    {
      path: '',
      component: HomeComponent
    },
    {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomepageComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'review',
    component:ReviewComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'addReview',
    component:AddReviewComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'admin/login',
    component:AdminLoginComponent
  },
  {
    path:'admin/requests',
    component:RequestsComponent,
    canActivate:[AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:"editProfile",component:EditProfileComponent,title:"edit profile page"},
  {path:"login",component:LoginComponent,title:"login page"},
  {path:"viewProfile",component:ViewProfileComponent,title:"view profile page"},
]

@NgModule({
  declarations: [
    EditProfileComponent,
    ViewProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }

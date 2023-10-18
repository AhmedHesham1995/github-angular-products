import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-template-driven-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.scss']
})
export class UserTemplateDrivenFormComponent {
  user:Iuser={} as Iuser
  constructor(private userService:UsersService,private router:Router){}
  addUser(){
  //   let u:Iuser={
  //     firstName:"mido",
  //     lastName:"hosam",
  //     email:"mido@"
  //   }
  //   this.userService.signUpUsers(u).subscribe({
  //     next:(data)=>{
  //       console.log(data)
  //       console.log(u);

  //       this.router.navigate(['products'])

  //     },
  //     error:(err)=>{
  //       console.log(err);

  //     }
  //   })



  this.userService.signUpUsers(this.user).subscribe({
    next:(data)=>{
      console.log(data)

      this.router.navigate(['products'])

    },
    error:(err)=>{
      console.log(err);

    }
  })

  }

  }


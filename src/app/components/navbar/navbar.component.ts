import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  userlog:boolean;
  constructor(private userAuthService:UserAuthService){
    this.userlog=this.userAuthService.isUserLogged

  }
  ngOnInit(): void {
    this.userAuthService.getUserLoggedStatus().subscribe({
      next:(userStatus)=>{
        this.userlog=userStatus
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }

}

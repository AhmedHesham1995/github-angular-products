import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit{
  userLog:boolean=true
  constructor(private userAuthService:UserAuthService){}
  ngOnInit(): void {
    this.userLog=this.userAuthService.isUserLogged
    console.log(this.userLog);

  }

  logInFunc(){
    this.userAuthService.login("dddd@","11111")
    this.userLog=this.userAuthService.isUserLogged

  }
  logOutFunc(){
    this.userAuthService.logOut()
    this.userLog=this.userAuthService.isUserLogged

  }


}

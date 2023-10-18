import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  userLoggedBehaviour:BehaviorSubject<boolean>
  constructor() {
    this.userLoggedBehaviour=new BehaviorSubject<boolean>(this.isUserLogged)
   }

   login(userEmail:string,userPassword:string){
      let token="5165656"
      localStorage.setItem("userToken",token)
      this.userLoggedBehaviour.next(true)
   }
   logOut(){
    localStorage.removeItem("userToken")
    this.userLoggedBehaviour.next(false)
   }

  get isUserLogged():boolean{
    return (localStorage.getItem("userToken"))?true :false
  }

  getUserLoggedStatus():Observable<boolean>{

    return this.userLoggedBehaviour.asObservable()
  }
}

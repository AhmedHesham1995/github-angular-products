import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {



    userForm:FormGroup
    constructor( private formbuilder:FormBuilder ,private userserv:UsersService,private router:Router){

      this.userForm = this.formbuilder.group({
        FullName: ['', [Validators.required, Validators.minLength(5)]],
        Email: ['', [Validators.required, Validators.email]],
        // MobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
        City: ['', [Validators.required]],
        PostalCode: ['', [Validators.required]],
        street: ['', [Validators.required]],
        Password: ['', [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ['', [Validators.required]],
        MobileNumber:this.formbuilder.array([this.getcontrol()])

      },{
        validators:this.MustMatch('Password','ConfirmPassword'),
       } ,
       )
      ;
    }


    get FullName(){
      return this.userForm.get('FullName');
    }
    get Email(){
      return this.userForm.get('Email');
    }

    get City(){
      return this.userForm.get('City');
    }
    get PostalCode(){
      return this.userForm.get('PostalCode');
    }
    get street(){
      return this.userForm.get('street');
    }
    get MobileNumber(){
      return <FormArray>this.userForm.get('MobileNumber')
    }

    add(){
      this.MobileNumber.push(this.getcontrol())
    }
    getcontrol() :FormGroup{
      return this.formbuilder.group({
        MobileNumber:['', [Validators.required, Validators.pattern('[0-9]{11}')]]
      })
    }
    remove(i:number):void{
      this.MobileNumber.removeAt(i)
    }
    get Password(){
      return this.userForm.get('Password');
    }
    get ConfirmPassword(){
      return this.userForm.get('ConfirmPassword');
    }
    get f(){
      return this.userForm.controls
    }
    MustMatch(Password:any,ConfirmPassword:any){
  return (FormGroup:FormGroup)=>{
    const PasswordControl=FormGroup.controls[Password]
    const confirmPasswordControl=FormGroup.controls[ConfirmPassword]
    if(confirmPasswordControl.errors&& !confirmPasswordControl.errors['MustMatch']){
      return;
    }if (PasswordControl.value!==confirmPasswordControl.value){
      confirmPasswordControl.setErrors({MustMatch:true})
    }else {
      confirmPasswordControl.setErrors(null)
    }

  }
    }
    valueofphone( MobileNumber:number){
      return (FormArray:FormArray)=>{
  const formphone=FormArray.controls[MobileNumber]
    }
  }

    onSubmit() {

       this.userserv.signUpUsers(this.userForm.value).subscribe({
      next:(data)=>{
       console.log(data)
      //  this.router.navigate(['/products'])
     },
     error:(error)=>{
     console.log(error)
     }
    })
    }


  }







// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// import { UsersService } from 'src/app/services/users.service';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {

//   userForm:FormGroup
//   constructor(private formbuilder:FormBuilder,private userService:UsersService,private router:Router){

//     this.userForm = this.formbuilder.group({
//       FullName: ['', [Validators.required, Validators.minLength(5)]],
//       Email: ['', [Validators.required, Validators.email]],
//       City: ['', [Validators.required]],
//       PostalCode: ['', [Validators.required]],
//       street: ['', [Validators.required]],
//       Password: ['', [Validators.required, Validators.minLength(6)]],
//       ConfirmPassword: ['', [Validators.required]],
//       MobileNumber:['', [Validators.required, Validators.pattern('[0-9]{11}')]]

//     },{
//       validators:this.MustMatch('Password','ConfirmPassword'),
//      } ,
//      )
//     ;
//   }

//   get FullName(){
//     return this.userForm.get('FullName');
//   }
//   get Email(){
//     return this.userForm.get('Email');
//   }

//   get City(){
//     return this.userForm.get('City');
//   }
//   get PostalCode(){
//     return this.userForm.get('PostalCode');
//   }
//   get street(){
//     return this.userForm.get('street');
//   }
//   get MobileNumber(){
//     return this.userForm.get('MobileNumber')
//   }


//   get Password(){
//     return this.userForm.get('Password');
//   }
//   get ConfirmPassword(){
//     return this.userForm.get('ConfirmPassword');
//   }
//   get confirm(){
//     return this.userForm.controls
//   }
//   MustMatch(Password:any,ConfirmPassword:any){
//   return (FormGroup:FormGroup)=>{
//   const PasswordControl=FormGroup.controls[Password]
//   const confirmPasswordControl=FormGroup.controls[ConfirmPassword]
//   if(confirmPasswordControl.errors&&!confirmPasswordControl.errors['MustMatch']){
//     return;
//   }if (PasswordControl.value!==confirmPasswordControl.value){
//     confirmPasswordControl.setErrors({MustMatch:true})
//   }else {
//     confirmPasswordControl.setErrors(null)
//   }

// }
//   }


//   onSubmit() {

//      this.userService.signUpUsers(this.userForm.value).subscribe({
//       next:(data)=>{
//      console.log(data)
//      this.router.navigate(['/products'])
//    },
//     error:(error)=>{
//     console.log(error)
//    }
//   })
//   }

// }







import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss']
})
export class UserReactiveFormComponent {
  userForm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    // this.userForm=new FormGroup({
    //   firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   lastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   email:new FormControl('',[Validators.required,Validators.minLength(3)]),
    // })

    this.userForm=formBuilder.group({
      fullName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern(/[0-9]{11}/)]],
    })
  }

  get fullName(){
    return this.userForm.get('fullName')
  }
}


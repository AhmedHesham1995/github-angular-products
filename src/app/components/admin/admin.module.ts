import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './new-product/new-product.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



const routes:Routes=[
  {path:"insertProduct",component:NewProductComponent,title:"new product"}
]

@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AdminModule { }

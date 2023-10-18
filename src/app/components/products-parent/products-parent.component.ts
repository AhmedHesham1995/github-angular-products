import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.scss']
})
export class ProductsParentComponent {
  listFilter:string=''

  prodInCart:Iproduct[]=[]

  cartFunc(prod:Iproduct){
    // console.log(prod);
    if(!this.prodInCart.includes(prod)){
      this.prodInCart.push(prod)
      prod.quantity+=1
      prod.cartPrice=prod.price
    }
    // console.log(this.prodInCart);
    else{
      prod.quantity+=1
      prod.cartPrice=prod.quantity*prod.price
    }

  }

  minus(product:Iproduct){

   if(product.quantity==1){
    this.prodInCart=this.prodInCart.filter((e)=>e.id!=product.id)
   }
   else{
    product.quantity-=1
    product.cartPrice=product.price*product.quantity
   }
  }

  plus(product:Iproduct){

    product.quantity++;
    product.cartPrice=product.price*product.quantity
   }

  remove(product:Iproduct){

     this.prodInCart=this.prodInCart.filter((e)=>e.id!=product.id)
  }
}

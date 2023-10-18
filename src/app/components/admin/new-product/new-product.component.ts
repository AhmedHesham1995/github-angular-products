import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { NewProductsService } from 'src/app/services/new-products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  product:Iproduct={} as Iproduct
  constructor(private newProduct:NewProductsService ,private router:Router){

  }

  addProduct(){
      // let p:Iproduct={
      //     id:1422,
      //     name:'t-shirt',
      //     price:250,
      //     quantity:4,
      //     categoryID:5,
      //     Material:'cotton',
      //     img:'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/404162/2.jpg?6573',
      //     details:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
      //   }

        this.newProduct.insertProduct(this.product).subscribe({
          next:(data)=>{
            console.log(data)
            console.log(this.product);

            this.router.navigate(['products'])

          },
          error:(err)=>{
            console.log(err);

          }
        })
  }
}

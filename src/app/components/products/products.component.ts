import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
// productList:Iproduct[];
flagImage:boolean =true;
userName:string = "Ahmed";
productsWithFiltered:Iproduct[]=[];

today:Date=new Date();

creditCard:string="1234567895479863"

@Input() set ChildFilter(value:string) {
  // console.log("in setter: ",value);

//  this.productsWithFiltered = this.priceFilter(value);
 this.productsWithFiltered = this.prodService.priceFilter(value);
//  console.log(this.productsWithFiltered);

}

productsWithCat:Iproduct[]=[]
set cat(catValue:string){
  if(catValue){
    // this.productsWithCat = this.catFilter(catValue);
    this.productsWithCat = this.prodService.catFilter(catValue);

  }
  else{
    catValue="0"
  }

}
// 1,2,3
// table => 1 , chairs => 2 , tv units =>3
constructor(public prodService:ProductsService,private prodsApiService:ProductsWithApiService,private router:Router){
  // this.productList=[
  //   {id:2,name:"Solo Wooden Top Coffee Table",price:5000,quantity:0,categoryID:1,Material:"Wood",PrdimgURL:"https://media.homecentre.com/i/homecentre/163906871-163906871-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$"},
  //   {id:5, name: 'Trixia 4-Seater Glass Dining Table', price: 30000, quantity:8, PrdimgURL:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal'},
  //   {id:25, name: 'Gasha Marble Top Side Table', price: 14000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal'},
  //   {id:7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //   {id:17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:1, PrdimgURL:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //   {id:9, name: 'Boston Study Chair', price: 1000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //   {id:10, name: 'Coby Extendable TV Unit', price: 13000, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'Wood'},
  //   {id:15, name: 'Accent TV Unit', price: 36999, quantity:4, PrdimgURL:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'MDF'},
  //   {id:55, name: 'Plymouth TV Unit', price: 36999, quantity:3, PrdimgURL:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'wood'},


  // ];

  // this.productList=[
  //   {id:1,name:"messi shirt-white",quantity:0,price:290,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8c702c7f968480c8db148a2ed69e3da_9366/Messi_44th_Trophy_Tee_Black_JE2038_01_laydown.jpg",categoryID:4},
  //   {id:2,name:"messi shirt-black",quantity:0,price:270,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6bfcf3fe03c84a019adaae1799a1c53a_9366/Messi_Tee_White_JH1136_01_laydown.jpg",categoryID:4},
  //   {id:3,name:"shoes",quantity:0,price:300,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",categoryID:4},
  // {id:4, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity:0, img:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1},
  // {id:5, name: 'Trixia 4-Seater Glass Dining Table', price: 30000, quantity:0, img:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1},
  // {id:25, name: 'Gasha Marble Top Side Table', price: 14000, quantity:0, img:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1},
  // {id:7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:0, img:'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2},
  // {id:17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:0, img:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2},
  // {id:9, name: 'Boston Study Chair', price: 1000, quantity:0, img:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2},
  // {id:10, name: 'Coby Extendable TV Unit', price: 13000, quantity:0, img:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3},
  // {id:15, name: 'Accent TV Unit', price: 36999, quantity:0, img:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3},
  // {id:55, name: 'Plymouth TV Unit', price: 36999, quantity:0, img:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3},

  // ]

}
  ngOnInit(): void {
    // this.productsWithFiltered=this.productList;
    // this.productsWithFiltered=this.prodService.getAllProducts();

    this.prodsApiService.getAllProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.productsWithFiltered=data
      },
      error:(err)=>{
        console.log(err);

      }
    })



    // this.productsWithCat=this.productList;
    // this.productsWithCat=this.prodService.getAllProducts();




  }


toggleImage(){
this.flagImage=!this.flagImage;
}
// Day2
// priceFilter(filterValue:string):Iproduct[]{

//   // filterValue=filterValue.toLowerCase();
//   return this.productList.filter((product:Iproduct)=>String(product.price).includes(filterValue))

// }

// catFilter(catValue:string):Iproduct[]{
//   if(Number(catValue)>0){
//     return this.productList.filter((product:Iproduct)=>String(product.categoryID)===catValue)
//   }
//   else{
//     return this.productList
//   }
// }


flag:boolean=false
quantityHandle(prod:Iproduct):void{
  if(prod.quantity>0) prod.quantity--
  // prod.img=""
  // this.flag=!this.flag
}


@Output() addingToCartEvent:EventEmitter<Iproduct>=new EventEmitter<Iproduct>()
addToCart(prod:Iproduct){
  // console.log(prod);


  this.addingToCartEvent.emit(prod)
}


deleteProduct(productId: number): void {
  const confirm=window.confirm('Are you sure you want to delete this product?');

  if(confirm){
    this.prodsApiService.deleteProductById(productId).subscribe(()=>{
      this.productsWithFiltered=this.productsWithFiltered.filter((product)=>product.id!==productId);
    });
  }
}



}

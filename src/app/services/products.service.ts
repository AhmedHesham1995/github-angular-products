import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private  productList:Iproduct[];

  constructor() {
    this.productList=[
      {id:1,name:"messi shirt-white",quantity:0,price:290,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8c702c7f968480c8db148a2ed69e3da_9366/Messi_44th_Trophy_Tee_Black_JE2038_01_laydown.jpg",categoryID:4,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:2,name:"messi shirt-black",quantity:0,price:270,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6bfcf3fe03c84a019adaae1799a1c53a_9366/Messi_Tee_White_JH1136_01_laydown.jpg",categoryID:4,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:3,name:"shoes",quantity:0,price:300,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",categoryID:4,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:4, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity:0, img:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:5, name: 'Trixia 4-Seater Glass Dining Table', price: 30000, quantity:0, img:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:25, name: 'Gasha Marble Top Side Table', price: 14000, quantity:0, img:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:0, img:'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:0, img:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:9, name: 'Boston Study Chair', price: 1000, quantity:0, img:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:10, name: 'Coby Extendable TV Unit', price: 13000, quantity:0, img:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:15, name: 'Accent TV Unit', price: 36999, quantity:0, img:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
      {id:55, name: 'Plymouth TV Unit', price: 36999, quantity:0, img:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,details:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},

    ]
   }

   getAllProducts():Iproduct[]{
    return this.productList
   }

   priceFilter(filterValue:string):Iproduct[]{
    // filterValue=filterValue.toLowerCase();
    return this.productList.filter((product:Iproduct)=>String(product.price).includes(filterValue))
  }

  catFilter(catValue:string):Iproduct[]{
    if(Number(catValue)>0){
      return this.productList.filter((product:Iproduct)=>String(product.categoryID)===catValue)
    }
    else{
      return this.productList
    }
  }

  getProductById(Id:number):Iproduct|undefined{
    return this.productList.find((e)=>e.id==Id)
  }


  getProductIdsList():number[]{
    return this.productList.map((product)=>product.id)
  }


  // deleteProdById(Id:number):Iproduct[]{
  //   return this.productList.filter((product)=>product.id!=Id)
  // }


}

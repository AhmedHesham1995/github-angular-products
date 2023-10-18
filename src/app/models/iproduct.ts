export interface Iproduct {
  id:number;
  name:string;
  price:number;
  quantity:number;
  categoryID:number;
  Material?:string;
  img?:string;
  cartPrice?:number;
  cartQuantity?:number
  details:string
}

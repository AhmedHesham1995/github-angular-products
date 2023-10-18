import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  currentProductId:number=0
  product:Iproduct|undefined=undefined
  productsIdsList:number[]=[]
  currentProdIndex:number=0

  constructor(private activatedRoute:ActivatedRoute,private prodService:ProductsService,private router:Router,private prodApiService:ProductsWithApiService){

  }

  ngOnInit(): void {
    // this.currentProductId=(this.activatedRoute.snapshot.paramMap.get('id'))? Number((this.activatedRoute.snapshot.paramMap.get('id'))): 0
    // console.log(this.currentProductId);

    // this.product=this.prodService.getProductById(this.currentProductId)
    // console.log(this.product);

    this.productsIdsList=this.prodService.getProductIdsList()
    console.log(this.productsIdsList);


    //subscribe
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.currentProductId=paramMap.get("id")? Number((paramMap.get('id'))): 0;

      // let foundProduct=this.prodService.getProductById(this.currentProductId)
      // if(foundProduct){
      //   this.product=foundProduct
      // }
      // else{
      //   alert("product not found")
      //   this.router.navigate(['/products'])
      // }

      this.prodApiService.getProductById(this.currentProductId).subscribe(
        // (data)=>{
        //   if(data){
        //     this.product=data
        //     console.log(data);
        //   }
        //   else{
        //     alert("product not found")
        //     this.router.navigate(['/products'])
        //     console.log("error");

        //   }
        // }
        {
          next:(data)=>{
            console.log(data);
            this.product=data
          },
          error:(err)=>{
            alert("product not found")
            this.router.navigate(['/products'])
            console.log(err);

          }
        }
      )


      // this.prodsApiService.getAllProducts().subscribe({
      //   next:(data)=>{
      //     console.log(data);
      //     this.productsWithFiltered=data
      //   },
      //   error:(err)=>{
      //     console.log(err);

      //   }
      // })


    })



  }

  back(){
    this.router.navigate(['/productsParent'])
  }

  next(){
    this.currentProdIndex=this.productsIdsList.indexOf(this.currentProductId)
    this.router.navigate(['/productDetails',this.productsIdsList[++this.currentProdIndex]])

  }
  previous(){
    this.currentProdIndex=this.productsIdsList.indexOf(this.currentProductId)
    // console.log(this.currentProdIndex);
    this.router.navigate(['/productDetails',this.productsIdsList[--this.currentProdIndex]])


  }



  productsAfterSearch:Iproduct[]=[]
  searchWithPrice(price:string){
    this.prodApiService.searchWithPrice(price).subscribe({
      next:(data)=>{
        console.log(data);
        this.productsAfterSearch=data

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }

  selectedCategoryId: string="";
  prodsByCatId:Iproduct[]=[]
  getProdsByCatId(selectCat:string){
    this.prodApiService.getProdsByCatId(this.selectedCategoryId).subscribe({
      next:(data)=>{
        this.prodsByCatId=data
      },
      error:(err)=>{
        alert("category id is not valid")
        console.log(err);

      }
    })
  }


}

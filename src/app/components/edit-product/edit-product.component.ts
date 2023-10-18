

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsWithApiService } from '../../services/products-with-api.service';
import { NewProductsService } from '../../services/new-products.service';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent implements OnInit {
  product: Iproduct = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    categoryID: 0,
    details: '',
  };
  isEdit: boolean = false;

  constructor(
    private productService: ProductsWithApiService,
    private newProductsService: NewProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        const productId = +params['id'];
        this.productService.getProductById(productId).subscribe(
          (product) => {
            this.product = product;
            this.isEdit = true;
          },
          (error) => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });
  }

  editProduct(productId: number) {
    this.router.navigate(['/edit-product', productId]);
  }

  saveProduct() {
    if (this.isEdit) {
      this.productService.updateProduct(this.product.id, this.product).subscribe(
        (updatedProduct) => {
          console.log('Product updated successfully:', updatedProduct);
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      this.newProductsService.insertProduct(this.product).subscribe(
        (newProduct) => {
          console.log('Product inserted successfully:', newProduct);
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    }
  }

}

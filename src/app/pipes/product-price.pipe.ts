import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPrice'
})
export class ProductPricePipe implements PipeTransform {

  transform(value: number){

  }

}

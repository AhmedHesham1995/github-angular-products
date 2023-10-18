import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {

  transform(value: string): string {
      let final=""
      for(let i=0;i<value.length-1;i+=4){
        if(i<12){
          final+=value.slice(i,i+4)+"-"
        }
        else final+=value.slice(i,i+4)
      }

      return final
  }

}

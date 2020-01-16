import { Pipe, PipeTransform } from '@angular/core';
import { DrawingNumber, DrawingNumberType } from '../lotteryGames/lotteryGame';

@Pipe({
  name: 'incompleteMatchSelector'
})
export class IncompleteMatchSelectorPipe implements PipeTransform {

  transform(value: DrawingNumber[]): string {
    
    let transformResult: string = '';

    value.forEach(function(item)
    {      
      if(item.drawingNumberType == DrawingNumberType.IncompleteMatchSelector){
        console.log('incompleteMatchSelector: ' + item.value);

        transformResult = item.value.toString();
      }
    });  

    console.log('incompleteMatchSelector result: ' + transformResult);
    return transformResult;
  }
}

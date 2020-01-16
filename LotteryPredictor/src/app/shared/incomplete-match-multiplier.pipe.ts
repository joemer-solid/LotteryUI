import { Pipe, PipeTransform } from '@angular/core';
import { DrawingNumber, DrawingNumberType } from '../lotteryGames/lotteryGame';

@Pipe({
  name: 'incompleteMatchMultiplier'
})
export class IncompleteMatchMultiplierPipe implements PipeTransform {

  transform(value: DrawingNumber[]): string {
    
    let transformResult: string = '';

    value.forEach(function(item)
    {      
      if(item.drawingNumberType == DrawingNumberType.IncompleteMatchMultiplier){
        console.log('incompleteMatchMultiplier: ' + item.value);

        transformResult = item.value.toString();
      }
    });  

    console.log('incompleteMatchMultiplier result: ' + transformResult);
    return transformResult;
  }
}

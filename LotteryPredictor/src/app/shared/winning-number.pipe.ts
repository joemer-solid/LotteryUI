import { Pipe, PipeTransform } from '@angular/core';
import { DrawingNumber, DrawingNumberType } from '../lotteryGames/lotteryGame';


@Pipe({
  name: 'winningNumber' 
})
export class WinningNumberPipe implements PipeTransform {

  transform(value: DrawingNumber[]): string[] {
    
    let transformResult: Array<string> = new Array();
    let element: number = 1;

    value.forEach(function(item)
    {
      
      if(item.drawingNumberType == DrawingNumberType.Selector){

        console.log('winningNumberPipe: ' + item.value);
      
        //transformResult.push(item.value.toString() + ' (' + item.selectionPct.toString() + ') ');  
        transformResult.push(item.value.toString());
        transformResult.push(item.selectionPct.toString());

        element++;
        //transformResult += '[ '  + item.value.toString().concat(' (' + (item.selectionPct).toString() + '`) ]');      
      }
    });  

    console.log('winningNumberPipe result: ' + transformResult.join(','));
    return transformResult;
  }

}

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LotteryGame } from './lotteryGame';
import { LotteryGameDrawing } from './lotteryGame';
import { DrawingNumber } from './lotteryGame';
import { DrawingNumberType } from './lotteryGame';

export class LotteryGameData implements InMemoryDbService {

    createDb() {
      const lotteryGames: LotteryGame[] = [
        {
          id: 1,
          code: 'MegaMill',
          name: 'Mega Millions',
          state: 'PA' ,
          imageUrl: 'assets/images/paMegaMillions.jpg' ,
          drawingHistory: null
        },
        {
            id: 2,
            code: 'PBall',
            name: 'PowerBall',
            state: 'PA',
            imageUrl: 'assets/images/paPowerball.jpg',
            drawingHistory: null
        }];

        return { lotteryGames };
    }


    // createMegaMillionsDrawingHistory() : LotteryGameDrawing[] {

    //     const drawingHistory: LotteryGameDrawing[] = [
    //       {
    //         id: 1,
    //         drawingDate: new Date(2019,11,13),
    //         numbers : [
    //           {              
    //            id: 1,
    //            value: 17,
    //            selectionPct: 0,
    //            elementType: NumberElementType.Selector,
    //           },
    //           {              
    //             id: 2,
    //             value: 21,
    //             selectionPct: 0,
    //             elementType: NumberElementType.Selector,
    //            },
    //            {              
    //             id: 3,
    //             value: 29,
    //             selectionPct: 0,
    //             elementType: NumberElementType.Selector,
    //            },
    //            {              
    //             id: 4,
    //             value: 39,
    //             selectionPct: 0,
    //             elementType: NumberElementType.Selector,
    //            },
    //            {              
    //             id: 5,
    //             value: 56,
    //             selectionPct: 0,
    //             elementType: NumberElementType.Selector,
    //            },
    //            {              
    //             id: 6,
    //             value: 22,
    //             selectionPct: 0,
    //             elementType: NumberElementType.IncompleteMatchSelector,
    //            },
    //            {              
    //             id: 7,
    //             value: 3,
    //             selectionPct: 0,
    //             elementType: NumberElementType.IncompleteMatchMultiplier,
    //            } 
    //           ]
    //       }
    //     ];

     //   return drawingHistory;
    //}
}
export interface LotteryGame {
    id: number;
    code: string;
    name: string;
    state: string;
    imageUrl: string;
    drawingHistory : LotteryGameDrawing[]
  }

export interface LotteryGameDrawing {
  id: number;
  lotteryGameIdRef: number;
  drawingDate: Date;
  drawingNumbers : DrawingNumber[];
}

export interface DrawingNumber {
  id: number;
  drawingHistoryIdRef: number;
  value: number;
  sequenceNumber: number; 
  drawingNumberType: DrawingNumberType;
  selectionPct: number;
}

export interface DrawingNumberDisplay {
  value: string;
}

export enum DrawingNumberType {
 Selector = 1,
 IncompleteMatchSelector = 2,
 IncompleteMatchMultiplier = 3
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDays'
})
export class CountDaysPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var todayNumber = Date.parse(todayNoTime);
    value = Date.parse(value)
    console.log(todayNumber)
    console.log(value)
    var dateDifference = Math.abs(todayNumber - value) //returns value in milliseconds
    const secondsInDay = 86400
    var dateDifferenceSeconds = dateDifference*0.001 //CONVERTS MILLISECONDS TO SECONDS
    var dateCounter = Math.round(dateDifferenceSeconds/secondsInDay) //get days

    if(dateCounter >= 1 && value < todayNoTime) {
      return dateCounter;
    } else {
      return 0
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {


  transform(value:any) :any {
    const date1 = new Date(value)
    const date2 = new Date()

    const oneDay = 1000 * 60 * 60 * 24

    const diffInTime = date2.getTime() - date1.getTime()

    const diffInDays = Math.round(diffInTime/oneDay)

    return diffInDays

  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'dateFilter'})
export class DateFilter implements PipeTransform {
  transform(value: any, args?) {
    if (!value) {
      return '';
    }
    let [currentDate] = args;
    return value.filter(film => {
      return film.date == currentDate;
    });
  }
}

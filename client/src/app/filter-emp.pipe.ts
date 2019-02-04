import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filterEmp'
})
export class FilterEmpPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args || args === '') {
      return value;
    }
    const query = args.toLowerCase();
    return value.filter(item => {
      for (const prop in item) {
        if (item.hasOwnProperty(prop)) {
          if (typeof item[prop] === 'number' && item[prop].toString().includes(query)) {
            return true;
          } else if (typeof item[prop] === 'string') {
            const date = (new Date(item[prop])).toString();
            if (date !== 'Invalid Date') {
              const dp = new DatePipe('en-us');
              const d = dp.transform(date, 'mediumDate');
              if (d.toLowerCase().includes(query)) {
                return true;
              }
            } else if (item[prop].toLowerCase().includes(query)) {
              return true;
            }
          } else if (Array.isArray(item[prop]) && this.transform(item[prop], query).length > 0) {
            return true;
          }
        }
      }
      return false;
    });
  }

}

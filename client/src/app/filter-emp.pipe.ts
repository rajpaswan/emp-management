import { Pipe, PipeTransform } from '@angular/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

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
          if (typeof item[prop] === 'string' && item[prop].toLowerCase().includes(query)) {
            return true;
          } else if (Array.isArray(item[prop]) && this.transform(item[prop], query).length > 0) {
            return true;
          }
        }
      }
      return false;
    });
  }

}

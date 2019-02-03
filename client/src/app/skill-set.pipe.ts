import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillSet'
})
export class SkillSetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return !value ? '' : value.map(v => v.name).join(', ');
  }

}

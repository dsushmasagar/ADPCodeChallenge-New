import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: string, character: string) {
    // let x = character.split(' ');
    // x[1]
    return value.replace(character, ' | ');
  }
}

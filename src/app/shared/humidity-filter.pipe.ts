import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humidityFilter'
})
export class HumidityFilterPipe implements PipeTransform {

  transform(items: Array<any>, humidity: number): Array<any> {
    if(items) {
      return items.filter(item => item.main.humidity === humidity || !humidity);
    }
  }

}

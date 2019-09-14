import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * Checks if the field which is also a parameter on a single items
   *
   * @param items Items of data
   * @param field Filter by field of data
   * @param value Input text
   * @returns Array of matching items.
   */
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }

    return items.filter(singleItem =>
      singleItem[field].toLowerCase().includes(value.toLowerCase())
    );
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 
transform(items: any[], searchText: string): any[] {
  if(!items) return [];

  if(!searchText) return items;

  return this.searchItems(items, searchText.toLowerCase());
 }

searchItems(items :any[], searchtext): any[] {
   let results = [];
    items.forEach(it => {
      if (it.doctorspeciality.toLowerCase().includes(searchtext)||it.doctorname.toLowerCase().includes(searchtext)) {
          results.push(it);}
     
    });
    return results;
 }
}
import { Injectable } from '@angular/core';
import { environment as config } from '../../environments/environment'
import { of, Observable, from } from 'rxjs';
import { map, take, concatMap, filter, reduce } from 'rxjs/operators'
import { JsonFormData } from '../models/jsonFormData.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  formData: JsonFormData = config.formData;
  constructor() { }

  // debug to show json on page
  getFormData(): Observable<any> {
    return of(this.formData)
  }


  // fetch group and map each to lookup to get values
  // and then reduce to aggregate vals
  fetchData(groupName: string): Observable<number> {
    return from(this.formData.groups[groupName])
      .pipe(map(item => this.formData.items[item.toString()]),
        reduce((total, item) => total + item, 0)
      )
  }


  updateJsonData(fieldVal: number, fieldNm: string) {
    // set first group element to form value
    this.formData.groups[fieldNm]
      .slice(0, 1)
      .map(item => this.formData.items[item] = fieldVal);

    //reset remaining elements to 0
    this.formData.groups[fieldNm]
      .slice(1)
      .map(item => this.formData.items[item] = 0)
  }



}




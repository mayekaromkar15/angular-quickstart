import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sharedData: any = {}

  constructor() { }

  setSharedData(componentData: any, resourceName: any) {
    this.sharedData[resourceName] = componentData;
  }


}

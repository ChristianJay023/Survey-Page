import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {

  admin = new BehaviorSubject<any>(null); 
  surveyList = [
    {
      
    },
]

  constructor() { }
}

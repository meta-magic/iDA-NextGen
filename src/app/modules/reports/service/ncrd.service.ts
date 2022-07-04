import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NcrdService {


  addNewDevProfile = new Subject<String>(); 
  newDevProfileEmitter = new Subject<String>();

  newDevProfileEmitter11= new Subject<String>();

  reportDetailsShowService = new Subject<String>();

  rrShow = new Subject<String>();


constructor() { }

}

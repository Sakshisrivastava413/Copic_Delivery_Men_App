import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RouteStop } from '../models/route-stop.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  addRoute = new Subject<RouteStop>();

  constructor() {
  }

}

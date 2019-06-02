import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-route',
  templateUrl: './delivery-route.page.html',
  styleUrls: ['./delivery-route.page.scss'],
})
export class DeliveryRoutePage implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}

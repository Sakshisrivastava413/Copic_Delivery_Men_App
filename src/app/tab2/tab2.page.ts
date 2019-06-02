import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MessageService } from '../services/message.service';
import { RouteStop } from '../models/route-stop.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  routes: RouteStop[] = [];
  subscriber = null;

  constructor(
    private navController: NavController,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.subscriber = this.messageService.addRoute.subscribe(route => {
      this.routes.push(route);
    });
  }

  ngOnDestroy() {
    if (this.subscriber) this.subscriber.unsubscribe();
  }

  openAddRoutePage() {
    this.navController.navigateForward("add-route");
  }
}

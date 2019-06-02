import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouteStop } from 'src/app/models/route-stop.interface';
import { ReverseGeocodingService } from 'src/app/services/reverse-geocoding.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.page.html',
  styleUrls: ['./add-route.page.scss'],
})
export class AddRoutePage implements OnInit {
  searchResults: RouteStop[] = [];
  inputString: string = '';
  searchFailed = false;
  loading = false;

  constructor(
    private reverseGeocoding: ReverseGeocodingService,
    private navController: NavController,
    private messageService: MessageService
  ) { }

  ngOnInit() {

  }

  searchLocation() {
    if (this.inputString == '') {
      this.searchFailed = false;
      return this.searchResults = [];
    }
    this.inputString = this.inputString[0].toUpperCase() + this.inputString.slice(1);
    this.loading = true;
    this.reverseGeocoding.geocode(this.inputString).then((res: any) => {
      setTimeout(() => {
        this.loading = false;
        if (res.status == 'OK') {
          this.searchFailed = false;
          this.searchResults = res.results.map(r => ({
            location: {
              address: r.formatted_address
            }
          })).slice(0, 5);
        } else {
          this.searchFailed = true;
        }
      }, 500);
    });
  }

  addRoute(item: RouteStop) {
    this.messageService.addRoute.next(item);
    this.navController.pop();
  }

}


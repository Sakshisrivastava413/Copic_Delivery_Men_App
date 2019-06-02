import { Component, OnInit } from '@angular/core';
import { RouteStop } from 'src/app/models/route-stop.interface';
import { ReverseGeocodingService } from 'src/app/services/reverse-geocoding.service';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.page.html',
  styleUrls: ['./add-route.page.scss'],
})
export class AddRoutePage implements OnInit {
  locations: RouteStop[] = [
    {
      location: {
        address: 'FA - 352, Mansarover Garden, New Delhi - 15',
        lat: '123',
        long: '21'
      },
      time: new Date().toString()
    },
    {
      location: {
        address: 'G A/13, Rohini Sector 15, New Delhi - 39',
        lat: '123',
        long: '21'
      },
      time: new Date().toString()
    }
  ];

  searchResults: RouteStop[] = [];
  inputString: string = '';
  searchFailed = false;
  loading = true;

  constructor(private reverseGeocoding: ReverseGeocodingService) { }

  ngOnInit() {

  }

  searchLocation() {
    if (this.inputString == '') return this.searchResults = [];

    this.loading = true;
    this.reverseGeocoding.geocode(this.inputString).then((res: any) => {
      setTimeout(() => {
        this.loading = false;
        if (res.status == 'OK') {
          this.searchResults = res.results.map(r => ({
            location: {
              address: r.formatted_address
            }
          })).slice(0, 5);
        }
      }, 500);
    });

    // this.inputString = this.inputString[0].toUpperCase() + this.inputString.slice(1);
    // this.searchResults = this.locations.filter(location => location.location.address.toLowerCase().indexOf(this.inputString.toLowerCase()) != -1);
  }

}


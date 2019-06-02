import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReverseGeocodingService {

  constructor(private httpClient: HttpClient) { }

  geocode(address: string) {
    return this.httpClient.get(
      'https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address,
          key: environment.gmapApiKey,
          region: 'in'
        }
      }
    ).toPromise();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliveryRoutePage } from './delivery-route.page';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    component: DeliveryRoutePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: environment.gmapApiKey
    })
  ],
  declarations: [DeliveryRoutePage]
})
export class DeliveryRoutePageModule { }

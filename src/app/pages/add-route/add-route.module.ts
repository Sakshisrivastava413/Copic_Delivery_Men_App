import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddRoutePage } from './add-route.page';
import { ReverseGeocodingService } from 'src/app/services/reverse-geocoding.service';

const routes: Routes = [
  {
    path: '',
    component: AddRoutePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddRoutePage],
  providers: [ReverseGeocodingService]
})
export class AddRoutePageModule { }

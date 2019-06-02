import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRoutePage } from './delivery-route.page';

describe('DeliveryRoutePage', () => {
  let component: DeliveryRoutePage;
  let fixture: ComponentFixture<DeliveryRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryRoutePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

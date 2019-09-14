import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
import { DashboardsComponent } from './dashboards.component';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

@NgModule({
  declarations: [
    DashboardsComponent,
    DashboardProductsComponent,
  ],
  imports: [
    DashboardsRoutingModule,
    SharedModule,
    CommonModule,
    ChartjsModule
  ]
})
export class DashboardsModule { }

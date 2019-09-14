

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { DataTableModule } from 'angular-6-datatable';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    FormsModule,
    ProductsRoutingModule,
    CommonModule,
    SharedModule,
    DataTableModule,
    CoreModule,
  ]
})
export class ProductsModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
import { DashboardsComponent } from './dashboards.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'product',
                
            },
            {
                path: 'product',
                component: DashboardProductsComponent,
            },
       
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardsRoutingModule { }

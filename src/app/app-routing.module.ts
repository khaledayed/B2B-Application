import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboards',
    pathMatch: 'full'
  },
  {
    path: 'dashboards',
    loadChildren: './dashboards/dashboards.module#DashboardsModule',
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

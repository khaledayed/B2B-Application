import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { LayoutComponent } from './layout/layout.component';
import { PortletComponent } from './portlet/portlet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    LayoutComponent,
    PortletComponent,
    NavbarComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }

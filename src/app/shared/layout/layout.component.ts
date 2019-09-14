import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseService } from 'src/app/core/services';

@Component({
  selector: 'miza-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  isEnlarged: boolean;

  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.isEnlarged = false;
    this.baseService.toggleSidebarMenu.subscribe(res => {
      this.isEnlarged = res;
    });
  }
  ngOnDestroy() {
    this.baseService.toggleSidebarMenu.unsubscribe();
  }
}

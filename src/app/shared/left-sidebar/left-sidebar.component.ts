import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'miza-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  subDrop: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isDashboardRoute() ? this.subDrop = true : this.subDrop = false;
  }
  /**
   * Check if the current URL path is the dashboard URL
   *
   * @returns `true` if the path contain 'dashboards', `false` otherwise
   */
  private isDashboardRoute(): boolean {
    const routes = this.router.url.split('/');

    return routes.includes('dashboards');
  }

}

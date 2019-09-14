import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/services';

@Component({
  selector: 'miza-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  displayUserMenu: boolean;
  displayAlertMenu: boolean;
  enlargeMenu: boolean;

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.displayUserMenu = false;
    this.displayAlertMenu = false;
    this.enlargeMenu = false;
  }
  /**
   * Toggle sidebar menu
   */
  toggleMenu() {
    const enlarge = this.enlargeMenu = !this.enlargeMenu;

    this.baseService.toggleSidebar(enlarge);
  }

}

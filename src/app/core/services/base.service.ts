import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  toggleSidebarMenu = new Subject<boolean>();

  constructor() { }

  /**
   * Toggle the sidebar menu
   *
   * @param enlarge `true` to enlarge sidebar menu, `false` otherwise
   */
  toggleSidebar(enlarge: boolean): void {
    this.toggleSidebarMenu.next(enlarge);
  }
}

import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  isOpen: boolean = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isOpen$.subscribe(isOpen => this.isOpen = isOpen);
  }

}

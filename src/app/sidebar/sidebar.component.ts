import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
}) 
export class SidebarComponent implements OnInit {
  sidebarWidth: string = '300px'; 

  translateX: string = 'translateX(0px)'; // Initial translation value

  toggleSidebar() {
    // Toggle translation value between '-300px' and '0px'
    this.translateX = this.translateX === 'translateX(-320px)' ? 'translateX(0px)' : 'translateX(-320px)';
  }

  ngOnInit() {}

}

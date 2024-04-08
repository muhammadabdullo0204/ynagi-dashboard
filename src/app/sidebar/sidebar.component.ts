import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() isExpend: boolean = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  toggleSidebar() {
    this.toggle.emit(!this.isExpend);
  }


}

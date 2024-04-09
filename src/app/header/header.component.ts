import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    localStorage.removeItem('token');
  }
}

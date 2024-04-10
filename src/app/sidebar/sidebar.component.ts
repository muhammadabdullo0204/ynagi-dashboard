import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
}) 
export class SidebarComponent implements OnInit {

  translateX$: Observable<string>;

  constructor(private sidebarService: SidebarService) {
    this.translateX$ = this.sidebarService.translateX$;
  }

  

  ngOnInit() {}

}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',


})
export class MenuComponent {
  isSmallScreen: boolean = false;
  rowHeight: string = '1:2'; // Default row height
  gutterSize: string = '0px'; // Default gutter size
  constructor(private breakpointObserver: BreakpointObserver) {
    
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => result.matches)
      )
      .subscribe(matches => {
        this.isSmallScreen = matches;
        // Adjust row height based on screen size
        this.rowHeight = this.isSmallScreen ? '1:1' : '2:1';

        this.gutterSize = this.isSmallScreen ? '-225px' : '0px'; 

      });


  }
}

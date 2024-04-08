import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip'; // Import TooltipPosition from Angular Material
import { CdkScrollable } from '@angular/cdk/scrolling';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css'] // Fix 'styleUrl' to 'styleUrls'
})
export class TooltipsComponent {

  isSmallScreen: boolean = false;
  rowHeight: string = '1:1'; 


  isSmallScreen1: boolean = false;
  rowHeight1: string = '2:1'; 

  constructor(private breakpointObserver: BreakpointObserver) {


    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => result.matches)
      )
      .subscribe(matches => {
        this.isSmallScreen = matches;
        // Adjust properties based on screen size
        this.rowHeight = this.isSmallScreen ? '1:1' : '1:1';
      });


      this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => result.matches)
      )
      .subscribe(matches => {
        this.isSmallScreen1 = matches;
        // Adjust properties based on screen size
        this.rowHeight1 = this.isSmallScreen1 ? '1:0.5' : '1:1';

      });




  }
  
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  message = new FormControl('Info about the action');

  disabled = new FormControl(false);

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

}

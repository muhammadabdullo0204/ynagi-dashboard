import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip'; // Import TooltipPosition from Angular Material
import { CdkScrollable } from '@angular/cdk/scrolling';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css'] 
})
export class TooltipsComponent implements OnInit {

  isSmallScreen: boolean = false;
  rowHeight: string = '1:1'; 
  isXSmallScreen: boolean = false;


  isSmallScreen2: boolean = false;
  rowHeight2: string = '1:1'; 


  isExtraSmallScreen: boolean = false;
  
  isSmallScreen1: boolean = false;
  rowHeight1: string = '2:1'; 

  isXSmallScreen3: boolean = false;


  isSmallScreen5: boolean = false;
  rowHeight5: string = '4:1'; 
  isXSmallScreen5: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {


    // this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
    //   .pipe(
    //     map(result => result.matches)
    //   )
    //   .subscribe(matches => {
    //     this.isSmallScreen = matches;
    //     // Adjust properties based on screen size for 768px
    //     this.rowHeight = this.isSmallScreen ? '1:1' : '1:1';
    //   });






      // this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      // .pipe(
      //   map(result => result.matches)
      // )
      // .subscribe(matches => {
      //   this.isSmallScreen = matches;
      //   // Adjust properties based on screen size for 480px
      //   this.rowHeight = this.isSmallScreen ? '1:1' : '1:1';
      // });




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

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => ({
          isSmallScreen: result.breakpoints[Breakpoints.Small],
          isXSmallScreen: result.breakpoints[Breakpoints.XSmall]
        }))
      )
      .subscribe(({ isSmallScreen, isXSmallScreen }) => {
        this.isSmallScreen = isSmallScreen;
        this.isXSmallScreen = isXSmallScreen;
        // Adjust properties based on screen size
        if (this.isXSmallScreen) {
          this.rowHeight = '1:1';
        } else {
          this.rowHeight = '1:1';
        }
      });


      this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => ({
          isSmallScreen1: result.breakpoints[Breakpoints.Small],
          isXSmallScreen3: result.breakpoints[Breakpoints.XSmall]
        }))
      )
      .subscribe(({ isSmallScreen1, isXSmallScreen3 }) => {
        this.isSmallScreen = isSmallScreen1;
        this.isXSmallScreen = isXSmallScreen3;
        // Adjust properties based on screen size
        if (this.isXSmallScreen3) {
          this.rowHeight1 = '1:1';
        } else {
          this.rowHeight1 = '1:0.7';
        }
      });




      this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => ({
          isSmallScreen5: result.breakpoints[Breakpoints.Small],
          isXSmallScreen5: result.breakpoints[Breakpoints.XSmall]
        }))
      )
      .subscribe(({ isSmallScreen5, isXSmallScreen5 }) => {
        this.isSmallScreen = isSmallScreen5;
        this.isXSmallScreen = isXSmallScreen5;
        // Adjust properties based on screen size
        if (this.isXSmallScreen5) {
          this.rowHeight5 = '1:1';
        } else {
          this.rowHeight5 = '2:1';
        }
      });


  }
  
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  message = new FormControl('Info about the action');

  disabled = new FormControl(false);

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

}

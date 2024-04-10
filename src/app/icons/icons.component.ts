import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent {

  isSmallScreen1: boolean = false;
  isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe('(max-width: 480px)')
      .pipe(
        map(result => result.matches)
      )
      .subscribe(matches => {
        this.isSmallScreen = matches;
      });


      this.breakpointObserver.observe('(max-width: 480px)')
      .pipe(
        map(result => result.matches)
      )
      .subscribe(matches => {
        this.isSmallScreen1 = matches;
      });
  }
}

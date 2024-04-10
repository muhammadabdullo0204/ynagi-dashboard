import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {

  isSmallScreen: boolean = false;
  isSmallScreen1: boolean = false;
  rowHeight: string = '2:1'; 
  gutterSize: string = '0px';
  rowHeight1: string = '3:1'; 
  isSmallScreen2: boolean = false;


  constructor(private breakpointObserver: BreakpointObserver) {

    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map(result => result.matches)
    )
    .subscribe(matches => {
      this.isSmallScreen = matches;
      this.rowHeight = this.isSmallScreen ? '1:0.8' : '1:1';
    });


      // this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      // .pipe(
      //   map(result => result.matches)

      // )
      // .subscribe(matches => {
      //   this.isSmallScreen = matches;
      //   this.rowHeight = this.isSmallScreen ? '1:0.8' : '2:1';





      // });

      this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => result.matches)

      )
      .subscribe(matches => {
        this.isSmallScreen2 = matches;

        this.rowHeight1 =this.rowHeight1 ? '2:1'  : '1:1';
        


        




      });




  }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  typesOfShoes1: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];



  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}

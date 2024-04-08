import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-yangi-dashboard',
  templateUrl: './yangi-dashboard.component.html',
  styleUrl: './yangi-dashboard.component.css'
})
export class YangiDashboardComponent implements AfterViewInit {


    
  @ViewChild('myChart') myChartRef!: ElementRef;
  @ViewChild('myDoughnutChart') myDoughnutChartRef!: ElementRef;
  @ViewChild('myDoughnutChartReverse') myDoughnutChartReverseRef!: ElementRef;

  isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => result.matches)
      )
      .subscribe(matches => {
        this.isSmallScreen = matches;
      });
  }

  
  ngAfterViewInit(): void {




    const chartCtx: CanvasRenderingContext2D = this.myChartRef.nativeElement.getContext('2d');
    const doughnutCtx: CanvasRenderingContext2D = this.myDoughnutChartRef.nativeElement.getContext('2d');
    const doughnutReverseCtx: CanvasRenderingContext2D = this.myDoughnutChartReverseRef.nativeElement.getContext('2d');

    new Chart(chartCtx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart(doughnutCtx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });

    new Chart(doughnutReverseCtx, {
      type: 'doughnut',
      data: {
        labels: ['Orange', 'Purple', 'Green', 'Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: [3, 2, 5, 12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });

    this.performNotImplementedAction();
  }


  performNotImplementedAction(): void {
    // Implement the missing functionality here or remove this method call
    console.error('NotYetImplemented: This action is not yet implemented.');
  }








  backgroundcolor: string = '';
  backgroundcolor2: string = '';
  backgroundcolor3: string = '';
  backgroundcolor4: string = '';
  backgroundcolor5: string = '';

  onclick() {
    this.backgroundcolor = 'gold';
  }

  onclick2() {
    this.backgroundcolor2 = 'gold';
  }
  onclick3() {
    this.backgroundcolor3 = 'gold';
  }
  onclick4() {
    this.backgroundcolor4 = 'gold';
  }
  onclick5() {
    this.backgroundcolor5 = 'gold';
  }









  backgroundcolor6: string = '';
  backgroundcolor7: string = '';
  backgroundcolor8: string = '';
  backgroundcolor9: string = '';
  backgroundcolor10: string = '';

  onclick6() {
    this.backgroundcolor6 = 'gold';
  }

  onclick7() {
    this.backgroundcolor7 = 'gold';
  }
  onclick8() {
    this.backgroundcolor8 = 'gold';
  }
  onclick9() {
    this.backgroundcolor9 = 'gold';
  }
  onclick10() {
    this.backgroundcolor10 = 'gold';
  }




  backgroundcolor11: string = '';
  backgroundcolor12: string = '';
  backgroundcolor13: string = '';
  backgroundcolor14: string = '';
  backgroundcolor15: string = '';

  onclick11() {
    this.backgroundcolor11 = 'gold';
  }

  onclick12() {
    this.backgroundcolor12 = 'gold';
  }
  onclick13() {
    this.backgroundcolor13 = 'gold';
  }
  onclick14() {
    this.backgroundcolor14 = 'gold';
  }
  onclick15() {
    this.backgroundcolor15 = 'gold';
  }


  backgroundcolor16: string = '';
  backgroundcolor17: string = '';
  backgroundcolor18: string = '';
  backgroundcolor19: string = '';
  backgroundcolor20: string = '';

  onclick16() {
    this.backgroundcolor16 = 'gold';
  }

  onclick17() {
    this.backgroundcolor17 = 'gold';
  }
  onclick18() {
    this.backgroundcolor18 = 'gold';
  }
  onclick19() {
    this.backgroundcolor19 = 'gold';
  }
  onclick20() {
    this.backgroundcolor = 'gold';
  }
}

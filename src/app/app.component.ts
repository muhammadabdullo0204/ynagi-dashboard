import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  

})
export class AppComponent {
  title = 'amalyot-3';

  
  translateX: string = 'translateX(0px)'; // Initial translation value

  toggleSidebar() {
    // Toggle translation value between '-300px' and '0px'
    this.translateX = this.translateX === 'translateX(-320px)' ? 'translateX(0px)' : 'translateX(-320px)';
  }

}

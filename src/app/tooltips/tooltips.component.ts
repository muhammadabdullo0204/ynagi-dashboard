import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip'; // Import TooltipPosition from Angular Material
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css'] // Fix 'styleUrl' to 'styleUrls'
})
export class TooltipsComponent {
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  message = new FormControl('Info about the action');

  disabled = new FormControl(false);

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

}

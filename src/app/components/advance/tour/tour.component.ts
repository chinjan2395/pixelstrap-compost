import { Component, OnInit } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  constructor(private joyrideService: JoyrideService) {
    this.joyrideService.startTour(
      {
        steps: ['1', '2', '3', '4', '5'],
        startWith:'1'
      });
  }
  ngOnInit(): void {
    /*  this.joyrideService.startTour(
       {
         steps: ['1', '2', '3', '4', '5'],
         stepDefaultPosition: 'top',
       });
   } */
  }
}
import { Component, OnInit } from '@angular/core';
import * as knobData from '../../../shared/data/chart/knob';

@Component({
  selector: 'app-knob-chart',
  templateUrl: './knob-chart.component.html',
  styleUrls: ['./knob-chart.component.scss']
})
export class KnobChartComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    /* setInterval(function () {
      document.getElementById('second').append(knobData.sec);
      document.getElementById('min').append(knobData.min);
      document.getElementById('hour').append(knobData.hour);
    }, 1000); */
    document.getElementById('cursormode').append(knobData.cursormode);
    document.getElementById('digitstep').append(knobData.digitstep);
    document.getElementById('displayInputDisable').append(knobData.displayInputDisable);
    document.getElementById('displayPrevious').append(knobData.displayPrevious);
    document.getElementById('offsetArc').append(knobData.offsetArc);
    document.getElementById('profit').append(knobData.profit);
  }

}

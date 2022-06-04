import { Component, OnInit } from '@angular/core';
import * as chartData from './../../../shared/data/dashboard/default';

declare var require: any;
let Knob = require('knob'); // browserify require

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {

  constructor() { }

  // Chart Data
  public chart1 = chartData.chartBox1;
  public chart2 = chartData.chartBox2;
  public chart3 = chartData.chartBox3;
  public mapChart = chartData.mapChart.options;
  public smallChart = chartData.smallChart

  ngOnInit() {
    let profit = Knob({
      label: 'March. 2019 , Total Invest',
      value: '75',
      angleOffset: 90,
      className: 'knob-content-center',
      activeClass: 'knob-block text-center',
      thickness: 0.05,
      width: 230,
      height: 230,
      fgColor: '#fb2e63',
      bgColor: '#f6f7fb',
      lineCap: 'round',
      readOnly: true
    });
    document.getElementById('profit').append(profit);
  }
}

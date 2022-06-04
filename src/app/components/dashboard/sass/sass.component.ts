import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/sass'

@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.scss']
})
export class SassComponent implements OnInit {
  public chart1 = chartData.sassSmallChart1;
  public chart2 = chartData.sassSmallChart1;
  public chart3 = chartData.sassSmallChart1;
  public chart4 = chartData.sassSmallChart1;
  public chart5 = chartData.sassSmallChart1;
  public chart = chartData.chartBox;
  public user = chartData.sassUserChart;
  public userOptions = chartData.sassUserChartOptions;
  public userEvents = chartData.sassUserChartListener;
  public apex1 = chartData.apexRadialChart;
  public apexArea = chartData.areaSpaline.options;
  public shipmentMapChart = chartData.shipmentMapChart;
  constructor() { }

  ngOnInit(): void {
  }

}

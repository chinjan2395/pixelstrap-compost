import { Component, OnInit } from '@angular/core';
import * as chartData from './../../../shared/data/dashboard/hospital';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {
  constructor() { }
  public chart = chartData.chartBox;
  public chart1 = chartData.chartBox1;
  public chart2 = chartData.chartBox2;
  public chart3 = chartData.chartBox3;
  public chart4 = chartData.apex1.options;
  public chart5 = chartData.apex2.options;
  // public smallChartListener = chartData.smallChartListener;
  // public hospitalSmallChartOptions = chartData.hospitalSmallChartOptions;
  public hospitalCurveChart = chartData.hospitalCurveChart;
  public hospitalCurveChartOptions = chartData.hospitalCurveChartOptions;
  ngOnInit(): void {
  }
}

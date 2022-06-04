import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/crm';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent implements OnInit {
  public graphRounded = chartData.graphRounded;
  public graphRoundedOption = chartData.graphRoundedOptions;
  public graphRoundedEvents = chartData.graphRoundedListener;

  public lineAreaFullChart = chartData.lineAreaFullChart;
  public lineAreaFullChartOptions = chartData.lineAreaFullChartOptions;
  public lineAreaFullChartEvents = chartData.lineAreaFullChartListener;

  public totalUsers = chartData.apexTotalUsers.options;
  public crmSmallChart = chartData.crmSmallChart.options;
  public doneProjectChart = chartData.doneProjectChart.options;
  public projectIncome = chartData.projectIncome;
  public newProject = chartData.newProject;

  public ClassicEditor = ClassicEditor;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    items:8,
    autoHeight: true,
    startPosition: 1,
    // autoWidth: true,
    responsive: {
      0:{
        items:1,
        nav:false
      },
      420:{
          items:2,
          nav:false
      },
      600:{
          items:3,
          nav:false
      },
      991: {
          items:4,
          margin:20,
          nav:false
      },
      1366:{
          items: 8,
          nav:false
      },
    }
  }
  public slidesStore = chartData.slideData;
  constructor() { }

  ngOnInit(): void {
  }

}

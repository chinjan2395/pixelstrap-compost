import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleComponent } from './google/google.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { NgxChartComponent } from './ngx-chart/ngx-chart.component';
import { KnobChartComponent } from './knob-chart/knob-chart.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'google',
        component: GoogleComponent,
        data: {
          title: "Google",
          breadcrumb: "Google"
        }
      },
      {
        path: 'chartjs',
        component: ChartjsComponent,
        data: {
          title: "ChartJS",
          breadcrumb: "ChartJS"
        }
      },
      {
        path: 'chartist',
        component: ChartistComponent,
        data: {
          title: "Chartist",
          breadcrumb: "Chartist"
        }
      },
      {
        path: 'ngx-chart',
        component: NgxChartComponent,
        data: {
          title: "Ngx-Chart",
          breadcrumb: "Ngx-Chart"
        }
      },
      {
        path: 'knob',
        component: KnobChartComponent,
        data: {
          title: "Knob Chart",
          breadcrumb: "Knob Chart"
        }
      },
      {
        path: 'apex',
        component:ApexChartComponent ,
        data: {
          title: "Apex Chart",
          breadcrumb: "Apex Chart"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }

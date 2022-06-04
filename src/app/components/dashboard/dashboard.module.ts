import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgApexchartsModule } from 'node_modules/ng-apexcharts';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrmComponent } from './crm/crm.component';
import { CryptoComponent } from './crypto/crypto.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { HospitalComponent } from './hospital/hospital.component';
import { SassComponent } from './sass/sass.component';
import { CountToModule } from 'angular-count-to';

@NgModule({
  declarations: [DefaultComponent, HospitalComponent, SassComponent, CrmComponent, CryptoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartistModule,
    ChartsModule,
    NgApexchartsModule,
    SharedModule,
    CarouselModule,
    CKEditorModule,
    CountToModule
  ]
})
export class DashboardModule { }

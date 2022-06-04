import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { HospitalComponent } from './hospital/hospital.component';
import { CrmComponent } from './crm/crm.component';
import { SassComponent } from './sass/sass.component';
import { CryptoComponent } from './crypto/crypto.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default',
          breadcrumb: 'Default'
        }
      },
    ],
  },
  {
    path: 'hospital',
    component: HospitalComponent,
    data: {
      title: 'Hospital',
      breadcrumb: 'Hospital'
    }
  },
  {
    path: 'crm',
    component: CrmComponent,
    data: {
      title: 'CRM ',
      breadcrumb: 'CRM'
    }
  },
  {
    path: 'sass',
    component: SassComponent,
    data: {
      title: 'Sass',
      breadcrumb: 'Sass'
    }
  },
  {
    path: 'crypto',
    component: CryptoComponent,
    data: {
      title: 'Crypto',
      breadcrumb: 'Crypto'
    }
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

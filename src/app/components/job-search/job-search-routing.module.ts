import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { JobCardComponent } from './job-card/job-card.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards',
        component: JobCardComponent,
        data: {
          title: "Card View",
          breadcrumb: "Card View"
        }
      },
      {
        path: 'list',
        component: JobListComponent,
        data: {
          title: "List View",
          breadcrumb: "List View"
        }
      },
      {
        path: 'details/:id',
        component: JobDescComponent,
        data: {
          title: "Job Details",
          breadcrumb: "Job Details"
        }
      },
      {
        path: 'apply/:id',
        component: JobApplyComponent,
        data: {
          title: "Apply",
          breadcrumb: "Apply"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSearchRoutingModule { }

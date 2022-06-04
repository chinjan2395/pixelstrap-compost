import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailedCourseComponent } from './detailed-course/detailed-course.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'list',
        component:ListComponent,
        data:{
          title:"List",
          breadcrumb:'List'
        }
      },
      {
        path:'detailed-course',
        component:DetailedCourseComponent,
        data:{
          title:"Detailed-Course",
          breadcrumb:'Detailed-Course'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }

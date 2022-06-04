import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TodoComponent,
        data: {
          title: 'To-Do',
          breadcrumb: ''
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }

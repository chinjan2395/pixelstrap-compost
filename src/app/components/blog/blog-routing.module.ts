import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { single } from 'rxjs/operators';
import { SingleComponent } from './single/single.component';
import { AddPostComponent } from './add-post/add-post.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'details',
        component:DetailsComponent,
        data:{
          title:"Details",
          breadcrumb:"Details"
        }
      },
      {
        path:'single',
        component:SingleComponent,
        data:{
          title:"Single Blog",
          breadcrumb:"Single Blog"
        }
      },
      {
        path:'add-post',
        component:AddPostComponent,
        data:{
          title:"Add Post",
          breadcrumb:"Ad Post"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SearchComponent
      },
     /*  {
        path: "search-images",
        component: SearchComponent
      },
      {
        path: "search-video",
        component: SearchComponent
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }

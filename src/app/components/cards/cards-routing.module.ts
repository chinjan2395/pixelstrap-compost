import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CreativeComponent } from './creative/creative.component';
import { DraggableComponent } from './draggable/draggable.component';
import { TabbedComponent } from './tabbed/tabbed.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        data: {
          title: "Basic Card",
          breadcrumb: "Basic Card"
        }
      },
      {
        path: 'creative',
        component: CreativeComponent,
        data: {
          title: "Creative Card",
          breadcrumb: "Creative Card"
        }
      },
      {
        path: 'dragable',
        component: DraggableComponent,
        data: {
          title: "Dragable Card",
          breadcrumb: "Dragable Card"
        }
      },
      {
        path: 'tabbed',
        component: TabbedComponent,
        data: {
          title: "Tabbed Card",
          breadcrumb: "Tabbed Card"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }

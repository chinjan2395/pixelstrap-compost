import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './bootstrap-tables/basic/basic.component';
import { SizingComponent } from './bootstrap-tables/sizing/sizing.component';
import { BorderComponent } from './bootstrap-tables/border/border.component';
import { StylingComponent } from './bootstrap-tables/styling/styling.component';
import { TableComponentsComponent } from './bootstrap-tables/table-components/table-components.component';
import { FullscreenComponent } from './data-tables/fullscreen/fullscreen.component';
import { PagingComponent } from './data-tables/paging/paging.component';
import { SelectionComponent } from './data-tables/selection/selection.component';
import { ColumnFilterComponent } from './data-tables/column-filter/column-filter.component';
import {BasicDataTableComponent} from './data-tables/basic-data-table/basic-data-table.component'
import { SortComponent } from './data-tables/sort/sort.component';
import { InlineEditComponent } from './data-tables/inline-edit/inline-edit.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "bootstrap-tables",
        children: [
          {
            path: 'basic',
            component: BasicComponent,
            data: {
              title: "Basic",
              breadcrumb: "Basic"
            }
          },
          {
            path: 'sizing',
            component: SizingComponent,
            data: {
              title: "Sizing",
              breadcrumb: "Sizing"
            }
          },
          {
            path: 'border',
            component: BorderComponent,
            data: {
              title: "Border",
              breadcrumb: "Border"
            }
          },
          {
            path: 'styling',
            component: StylingComponent,
            data: {
              title: "Styling",
              breadcrumb: "Styling"
            }
          },
          {
            path: 'table-components',
            component: TableComponentsComponent,
            data: {
              title: "Table Components",
              breadcrumb: "Table Components"
            }
          },
        ],
        data: {
          title: "Bootstrap-Tables",
          breadcrumb: "Bootstrap-Tables",
        }
      },
      {
        path: "datatables",
        children: [
          {
            path: 'basic',
            component:BasicDataTableComponent,
            data: {
              title: "Basic Table",
              breadcrumb: "Basic Table"
            }
          },
          {
            path: 'fullscreen',
            component:FullscreenComponent,
            data: {
              title: "Full Screen Table",
              breadcrumb: "Full Screen Table"
            }
          },
          {
            path: 'paging',
            component:PagingComponent,
            data: {
              title: "Paging Table",
              breadcrumb: "Paging Table"
            }
          },
          {
            path: 'selection',
            component:SelectionComponent,
            data: {
              title: "Selection Table",
              breadcrumb: "Selection Table"
            }
          },
          {
            path: 'column-filter',
            component:ColumnFilterComponent,
            data: {
              title: "Column Filter Table",
              breadcrumb: "Column Filter Table"
            }
          },
          {
            path: 'sort',
            component:SortComponent,
            data: {
              title: "Sorting Table",
              breadcrumb: "Sorting Table"
            }
          },
          {
            path: 'inline-edit',
            component:InlineEditComponent,
            data: {
              title: "Editable Table",
              breadcrumb: "Editable Table"
            }
          },
        ],
        data: {
          title: "Datatables",
          breadcrumb: "Datatables",
        }
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }

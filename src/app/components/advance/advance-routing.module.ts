import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

import { DropzoneComponent } from './dropzone/dropzone.component';
import { TourComponent } from './tour/tour.component';
import { SweetAlert2Component } from './sweet-alert2/sweet-alert2.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { StickyComponent } from './sticky/sticky.component';
import { ImageCroperComponent } from './image-croper/image-croper.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'scrollable',
        component: ScrollableComponent,
        data: {
          title: "Scrollable",
          breadcrumb: "Scrollable"
        }
      },
      {
        path: 'tree-view',
        component: TreeViewComponent,
        data: {
          title: "Tree View",
          breadcrumb: "Tree View"
        }
      },
      {
        path: 'dropzone',
        component: DropzoneComponent,
        data: {
          title: "Dropzone",
          breadcrumb: "Dropzone"
        }
      },
      {
        path: 'tour',
        component: TourComponent,
        data: {
          title: "Tour",
          breadcrumb: "Tour"
        }
      },
      {
        path: 'sweetAlert2',
        component: SweetAlert2Component,
        data: {
          title: "SweetAlert2",
          breadcrumb: "SweetAlert2"
        }
      },
      {
        path: 'owl-carousel',
        component: OwlCarouselComponent,
        data: {
          title: "Owl-Carousel",
          breadcrumb: "Owl-Carousel"
        }
      },
      {
        path: 'ribbons',
        component: RibbonsComponent,
        data: {
          title: "Ribbons",
          breadcrumb: "Ribbons"
        }
      },
      {
        path: 'pagination',
        component: PaginationComponent,
        data: {
          title: "Pagination",
          breadcrumb: "Pagination"
        }
      },
      {
        path: 'range-slider',
        component: RangeSliderComponent,
        data: {
          title: "Range-Slider",
          breadcrumb: "Range-Slider"
        }
      },
        {
          path:'image-cropper',
          component:ImageCroperComponent,
          data:{
            title:"Image Cropper",
            breadcrumb:"Image Cropper"
          }
        },
       
      {
        path: 'sticky',
        component: StickyComponent,
        data: {
          title: "Sticky",
          breadcrumb: "Sticky"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { WebpagesComponent } from './webpages/webpages.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { SearchComponent } from './search.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';


@NgModule({
  declarations: [WebpagesComponent, ImagesComponent, VideosComponent, SearchComponent,ImageGalleryComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgbModule,
    GalleryModule.forRoot()
  ]
})
export class SearchModule { }

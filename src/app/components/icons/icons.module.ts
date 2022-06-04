import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontAwesomeIconComponent } from './font-awesome-icon/font-awesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleLineIconComponent } from './simple-line-icon/simple-line-icon.component';
import { MaterialDesignIconComponent } from './material-design-icon/material-design-icon.component';
import { Pe7IconComponent } from './pe7-icon/pe7-icon.component';
import { TypiconsIconComponent } from './typicons-icon/typicons-icon.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';


@NgModule({
  declarations: [
    FlagIconComponent,
    FontAwesomeIconComponent,
    IcoIconComponent,
    ThemifyIconComponent,
    FeatherIconComponent,
    WeatherIconComponent,
    SimpleLineIconComponent,
    MaterialDesignIconComponent,
    Pe7IconComponent,
    TypiconsIconComponent,
    IonicIconsComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class IconsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontAwesomeIconComponent } from './font-awesome-icon/font-awesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { SimpleLineIconComponent } from './simple-line-icon/simple-line-icon.component';
import { MaterialDesignIconComponent } from './material-design-icon/material-design-icon.component';
import { Pe7IconComponent } from './pe7-icon/pe7-icon.component';
import { TypiconsIconComponent } from './typicons-icon/typicons-icon.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flag',
        component: FlagIconComponent,
        data: {
          title: "Flag",
          breadcrumb: "Flag"
        }
      },
      {
        path: 'fontawesome',
        component: FontAwesomeIconComponent,
        data: {
          title: "FontAwesome",
          breadcrumb: "FontAwesome"
        }
      },
      {
        path: 'ico',
        component: IcoIconComponent,
        data: {
          title: "Ico",
          breadcrumb: "Ico"
        }
      },
      {
        path: 'themify',
        component: ThemifyIconComponent,
        data: {
          title: "Themify",
          breadcrumb: "Themify"
        }
      },
      {
        path: 'feather',
        component: FeatherIconComponent,
        data: {
          title: "Feather",
          breadcrumb: "Feather"
        }
      },
      {
        path: 'weather',
        component: WeatherIconComponent,
        data: {
          title: "Whether",
          breadcrumb: "Whether"
        }
      },
      {
        path: 'simple-line-icon',
        component: SimpleLineIconComponent,
        data: {
          title: "Simple Line Icon",
          breadcrumb: "Simple Line Icon"
        }
      },
      {
        path: 'material-design-icon',
        component: MaterialDesignIconComponent,
        data: {
          title: "Material Design Icon",
          breadcrumb: "Material Design Icon"
        }
      },
      {
        path: 'pe7-icon',
        component: Pe7IconComponent,
        data: {
          title: "Pe7 Icon",
          breadcrumb: "Pe7 Icon"
        }
      },
      {
        path: 'typicons-icon',
        component: TypiconsIconComponent,
        data: {
          title: "Typicons Icon",
          breadcrumb: "Typicons Icon"
        }
      },
      {
        path: 'ionic-icon',
        component: IonicIconsComponent,
        data: {
          title: "Ionic Icon",
          breadcrumb: "Ionic Icon"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }

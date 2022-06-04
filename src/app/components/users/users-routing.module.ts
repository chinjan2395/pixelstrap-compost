import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:"team-details",
        component:TeamDetailsComponent,
        data:{
          title:"Team Details",
          breadcrumb:"Team Details",
        }
      },
      {
        path:"profile",
        component:ProfileComponent,
        data:{
          title:"Profile",
          breadcrumb:"Profile",
        }
      },
      {
        path:"edit-profile",
        component:EditProfileComponent,
        data:{
          title:"Edit Profile",
          breadcrumb:"Edit Profile",
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ContactService} from '../../shared/services/firebase/contact.service';
import { ContactsComponent } from './contacts/contacts.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {EditUserResolver} from '../../shared/services/firebase/edit-user.resolver';

import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';
import { ToastrModule } from 'ngx-toastr';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [NewUserComponent, ContactsComponent, EditUserComponent],

  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng5SliderModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    SharedModule
  ],

  providers: [ContactService, EditUserResolver]
})
export class ContactModule { }

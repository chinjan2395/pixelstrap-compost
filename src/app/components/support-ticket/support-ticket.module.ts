import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SupportTicketComponent } from './support-ticket.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    SupportTicketRoutingModule,
    NgxDatatableModule
  ],
  declarations: [SupportTicketComponent]
})
export class SupportTicketModule { }

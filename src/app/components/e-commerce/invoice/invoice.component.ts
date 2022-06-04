import { Component, OnInit, ElementRef } from '@angular/core';
import { InvoiceService } from "../../../shared/services/e-commerce/invoice.service";
import { Invoice } from "../../../shared/model/e-commerce/invoice.model";
import { ProductsService } from 'src/app/shared/services/e-commerce/products.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})

export class InvoiceComponent implements OnInit {

  public date: Date = new Date();
  public orderDetails: Invoice = {};

  constructor(private invoiceService: InvoiceService, public productsService:ProductsService, private elRef: ElementRef) { }

  ngOnInit() {
    this.orderDetails = this.invoiceService.getOrderItems();
  }
}

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ps-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public closeResult: string;
  constructor(public activeModal: NgbActiveModal) {
  }
  closeModal(){
    this.activeModal.close()
  }
}

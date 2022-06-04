import { transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { fadeIn } from 'ng-animate';
import { CustomizerService } from '../../../services/customizer.service';
import { NavService } from '../../../services/nav.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('animateRoute', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2 seconds
      // params: { timing: 3}
    }))])
  ]
})
export class ContentComponent implements OnInit, AfterViewInit {
  public right_side_bar: boolean;
  constructor(
    public navServices: NavService,
    public customizer: CustomizerService,
    private router: Router,
    private modalService: NgbModal
  ) {

  }
  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
    setTimeout(() => {
      if (this.router.url === '/dashboard/default') {
        this.modalService.open(WelcomeComponent, { centered: true, windowClass: 'welcome-popup', ariaLabelledBy: 'Welcome-Modal' })
      }
    },4000)
  }

  @HostListener('document:click', ['$event'])
  clickedOutside(event) {
    // click outside Area perform following action
    document.getElementById('outer-container').onclick = function (e) {
      e.stopPropagation();
      // if (e.target !== document.getElementById('search-outer')) {
      //   document.getElementsByTagName('body')[0].classList.remove('offcanvas');
      // }
      if (e.target !== document.getElementById('outer-container')) {
        document.getElementById('canvas-bookmark').classList.remove('offcanvas-bookmark');
      }
      if (e.target !== document.getElementById('inner-customizer')) {
        document.getElementsByClassName('customizer-links')[0].classList.remove('open');
        document.getElementsByClassName('customizer-contain')[0].classList.remove('open');
      }
    };
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public rightSidebar($event) {
    this.right_side_bar = $event;
  }
  
  ngOnInit() {
    if (window.innerWidth < 1199) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.navServices.closeSidebar = true;
          this.navServices.sidebarToggle = false;
          const ele = document.getElementById("sidebar-toggle") as HTMLInputElement;
          ele.checked = false;
        }
      })
    }
   }

}

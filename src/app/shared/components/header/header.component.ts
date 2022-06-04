import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/firebase/auth.service';

const body = document.getElementsByTagName('body')[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {
  public categories: string[] = ['Admin', 'Shopify', 'Ecommerce', 'Prestashop'];
  public paymentOptions: string[] = ['Paypal', 'Credit Card', 'Visa', 'Paytm'];
  public openNav = false;
  public openNavL = false;
  public dropdown = false;
  public right_sidebar = false;
  public text: string;
  public isOpenMobile = false;
  public url: any;
  public open = false;
  public open_search = true;
  public sidebarhidden: boolean;
  public elem;
  public headerStrech: boolean = false;
  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  public menuItems: Menu[];
  public items: Menu[];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;

  constructor(
    public navServices: NavService,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: any,
    public authService: AuthService,
  ) {
    this.translate.setDefaultLang('en');
  }
  public changeLanguage(lang) {
    this.translate.use(lang)
  }

  ngOnDestroy() {
    this.removeFix();
  }
  ToggleSearch() {
    this.open = !this.open;
  }

  right_side_bar() {
    this.right_sidebar = !this.right_sidebar;
    this.rightSidebarEvent.emit(this.right_sidebar);
  }


  switchToggle() {
    this.navServices.sidebarToggle = this.navServices.closeSidebar ? false : true;
    this.navServices.closeSidebar = !this.navServices.closeSidebar;
    this.sidebarhidden = true;
    this.headerStrech = !this.headerStrech;
  }
  openMobileNav() {
    this.openNav = !this.openNav;
  }
  openMobileNavL() {
    console.log("open nav call", this.openNavL);
    this.openNavL = !this.openNavL;
    
  }
  toggleDropdown() {
    console.log("toggle  nav call",this.openNavL);
    this.dropdown = !this.dropdown;
    this.openNavL = true;
  }
  ngOnInit() {
    this.elem = document.documentElement;
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems
    });
  }
  // Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0) {
      return;
    }
    // Image upload validation
    let mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }


  toggleFullScreen() {
    this.navServices.fullScreen = !this.navServices.fullScreen;
    if (this.navServices.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  searchTerm(term: any) {
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    let items = [];
    term = term.toLowerCase();
    this.items.filter(menuItems => {
      if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
        items.push(menuItems);
      }
      if (!menuItems.children) return false
      menuItems.children.filter(subItems => {
        if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = menuItems.icon
          items.push(subItems);
        }
        if (!subItems.children) return false
        subItems.children.filter(suSubItems => {
          if (suSubItems.title.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon
            items.push(suSubItems);
          }
        })
      })
      this.checkSearchResultEmpty(items)
      this.menuItems = items
    });
  }

  checkSearchResultEmpty(items) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    // body.classList.add("offcanvas");
  }

  removeFix() {
    this.searchResult = false;
    // body.classList.remove("offcanvas");
    this.text = "";
  }
}

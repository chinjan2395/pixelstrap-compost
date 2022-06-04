import { Component, OnInit, Input } from '@angular/core';
import { CustomizerService } from '../../services/customizer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  public customizer: any = ''

  public sidebarSetting: any = 'color'
  public layoutType: string = 'ltr'
  public sidebarType: string = 'default'
  public mixLayout: string = ''
  public data: any;

  constructor(public customize: CustomizerService,
    private modalService: NgbModal) {
    this.customize.data.color.layout_version = localStorage.getItem("layoutVersion")
    this.customize.data.color.color = localStorage.getItem("color")
    this.customize.data.color.primary_color = localStorage.getItem("primary_color")
    this.customize.data.color.secondary_color = localStorage.getItem("secondary_color")
    
  }

  // Open Modal
  openCustomizer(popup) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }

  // Open customizer
  openCustomizerSetting(val) {
    this.customizer = val
  }

  // Sidebar customizer Settings
  customizerSetting(val) {
    this.sidebarSetting = val
  }

  // Customize Layout Type
  customizeLayoutType(val) {
    this.customize.setLayoutType(val)
    this.layoutType = val
  }

  // Customize Side bar Type
  customizeSidebarType(val) {
    if (val == 'default') {
      this.customize.data.settings.sidebar.type = 'default';
      this.customize.data.settings.sidebar.body_type = 'default';
      document.getElementById("compactLogo").classList.add("hide");
      document.getElementById("Logo").classList.add("show");
      document.getElementById("compactLogo").classList.remove("show");
      document.getElementById("Logo").classList.remove("hide");

    } else if (val == 'compact') {
      this.customize.data.settings.sidebar.type = 'compact-wrapper';
      this.customize.data.settings.sidebar.body_type = 'sidebar-icon';
      document.getElementById("compactLogo").classList.add("show");
      document.getElementById("Logo").classList.add("hide");
      document.getElementById("Logo").classList.remove("show");
      document.getElementById("compactLogo").classList.remove("hide");

    } else if (val == 'compact-icon') {
      this.customize.data.settings.sidebar.type = 'compact-icon';
      this.customize.data.settings.sidebar.body_type = 'sidebar-hover';
      document.getElementById("compactLogo").classList.add("hide");
      document.getElementById("Logo").classList.add("show");
      document.getElementById("compactLogo").classList.remove("show");
      document.getElementById("Logo").classList.remove("hide");
    } else if (val == 'horizontal_sidebar') {
      this.customize.data.settings.sidebar.type = 'horizontal_sidebar';
      // this.customize.data.settings.sidebar.body_type = '';
    }
    this.sidebarType = val
  }

  // Customize Sidebar Setting
  customizeSidebarSetting(val) {
    this.customize.data.settings.sidebar_setting = val
  }

  // Customize Sidebar Backround
  customizeSidebarBackround(val) {
    this.customize.data.settings.sidebar_backround = val
  }

  // Customize Mix Layout
  customizeMixLayout(val) {
    this.customize.setLayout(val)
    this.mixLayout= val
  }

  // Customize Light Color
  customizeLightColorScheme(val) {
    this.customize.setColorLightScheme(val)
  }

  // Customize Dark Color
  customizeDarkColorScheme(val) {
    this.customize.setColorDarkScheme(val)
  }

  customizeBackroundLayout(val) {
    this.customize.setBackroundLayout(val)
  }


  ngOnInit() { }

}

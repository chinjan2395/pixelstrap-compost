import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-typicons-icon',
  templateUrl: './typicons-icon.component.html',
  styleUrls: ['./typicons-icon.component.scss']
})
export class TypiconsIconComponent implements OnInit {
  public detail: boolean = false;
  public icon: string;
  public val: string;
  public icons: string[] = ["adjust-brightness","adjust-contrast","anchor-outline","anchor","archive","arrow-back-outline","arrow-back","arrow-down-outline","arrow-down-thick","arrow-down","arrow-forward-outline","arrow-forward","arrow-left-outline","arrow-left-thick","arrow-left","arrow-loop-outline","arrow-loop","arrow-maximise-outline","arrow-maximise","arrow-minimise-outline","arrow-minimise","arrow-move-outline","arrow-move","arrow-repeat-outline","arrow-repeat","arrow-right-outline","arrow-right-thick","arrow-right","arrow-shuffle","arrow-sorted-down","arrow-sorted-up","arrow-sync-outline","arrow-sync","arrow-unsorted","arrow-up-outline","arrow-up-thick","arrow-up","at","attachment-outline","attachment","backspace-outline","backspace","battery-charge","battery-full","battery-high","battery-low","battery-mid","beaker","beer","bell","book","bookmark","briefcase","brush","business-card","calculator","calendar-outline","calendar","camera-outline","camera","cancel-outline","cancel","chart-area-outline","chart-area","chart-bar-outline","chart-bar","chart-line-outline","chart-line","chart-pie-outline","chart-pie","chevron-left-outline","chevron-left","chevron-right-outline","chevron-right","clipboard","cloud-storage","cloud-storage-outline","code-outline","code","coffee","cog-outline","cog","compass","contacts","credit-card","css3","database","delete-outline","delete","device-desktop","device-laptop","device-phone","device-tablet","directions","divide-outline","divide","document-add","document-delete","document-text","document","download-outline","download","dropbox","edit","eject-outline","eject","equals-outline","equals","export-outline","export","eye-outline","eye","feather","film","filter","flag-outline","flag","flash-outline","flash","flow-children","flow-merge","flow-parallel","flow-switch","folder-add","folder-delete","folder-open","folder","gift","globe-outline","globe","group-outline","group","headphones","heart-full-outline","heart-half-outline","heart-outline","heart","home-outline","home","html5","image-outline","image","infinity-outline","infinity","info-large-outline","info-large","info-outline","info","input-checked-outline","input-checked","key-outline","key","keyboard","leaf","lightbulb","link-outline","link","location-arrow-outline","location-arrow","location-outline","location","lock-closed-outline","lock-closed","lock-open-outline","lock-open","mail","map","media-eject-outline","media-eject","media-fast-forward-outline","media-fast-forward","media-pause-outline","media-pause","media-play-outline","media-play-reverse-outline","media-play-reverse","media-play","media-record-outline","media-record","media-rewind-outline","media-rewind","media-stop-outline","media-stop","message-typing","message","messages","microphone-outline","microphone","minus-outline","minus","mortar-board","news","notes-outline","notes","pen","pencil","phone-outline","phone","pi-outline","pi","pin-outline","pin","pipette","plane-outline","plane","plug","plus-outline","plus","point-of-interest-outline","point-of-interest","power-outline","power","printer","puzzle-outline","puzzle","radar-outline","radar","refresh-outline","refresh","rss-outline","rss","scissors-outline","scissors","shopping-bag","shopping-cart","social-at-circular","social-dribbble-circular","social-dribbble","social-facebook-circular","social-facebook","social-flickr-circular","social-flickr","social-github-circular","social-github","social-google-plus-circular","social-google-plus","social-instagram-circular","social-instagram","social-last-fm-circular","social-last-fm","social-linkedin-circular","social-linkedin","social-pinterest-circular","social-pinterest","social-skype-outline","social-skype","social-tumbler-circular","social-tumbler","social-twitter-circular","social-twitter","social-vimeo-circular","social-vimeo","social-youtube-circular","social-youtube","sort-alphabetically-outline","sort-alphabetically","sort-numerically-outline","sort-numerically","spanner-outline","spanner","spiral","star-full-outline","star-half-outline","star-half","star-outline","star","starburst-outline","starburst","stopwatch","support","tabs-outline","tag","tags","th-large-outline","th-large","th-list-outline","th-list","th-menu-outline","th-menu","th-small-outline","th-small","thermometer","thumbs-down","thumbs-ok","thumbs-up","tick-outline","tick","ticket","time","times-outline","times","trash","tree","upload-outline","upload","user-add-outline","user-add","user-delete-outline","user-delete","user-outline","user","vendor-android","vendor-apple","vendor-microsoft","video-outline","video","volume-down","volume-mute","volume-up","volume","warning-outline","warning","watch","waves-outline","waves","weather-cloudy","weather-downpour","weather-night","weather-partly-sunny","weather-shower","weather-snow","weather-stormy","weather-sunny","weather-windy-cloudy","weather-windy","wi-fi-outline","wi-fi","wine","world-outline","world","zoom-in-outline","zoom-in","zoom-out-outline","zoom-out","zoom-outline","zoom"]
  constructor(private toastrService: ToastrService) { }

  //Display Icon detail
  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="typcn typcn-' + icon + '"></i>';
  }

  //Copy an icon code
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="typcn typcn-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });

  }

  ngOnInit(): void {
  }

}

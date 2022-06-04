import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-simple-line-icon',
  templateUrl: './simple-line-icon.component.html',
  styleUrls: ['./simple-line-icon.component.scss']
})
export class SimpleLineIconComponent implements OnInit {
  public detail: boolean = false;
  public icon: string;
  public val: string;
  public icons: string[] = ["user", "user-female","people", "user-follow", "user-following", "user-unfollow", "trophy", "speedometer", "social-youtube", "social-twitter", "social-tumblr", "social-facebook", "social-dropbox", "social-dribbble", "shield", "screen-tablet", "screen-smartphone", "screen-desktop", "plane", "notebook", "mustache", "mouse", "magnet", "magic-wand", "hourglass", "graduation", "ghost", "game-controller", "fire", "eyeglass", "envelope-open", "envelope-letter", "energy", "disc", "cursor-move", "crop", "credit-card", "chemistry", "bell", "badge", "anchor", "action-redo", "action-undo", "bag", "basket", "basket-loaded", "book-open", "briefcase", "bubbles", "calculator", "call-end", "call-in", "call-out", "compass", "cup", "diamond", "direction", "directions", "docs", "drawer", "drop", "earphones", "earphones-alt", "feed", "film", "folder-alt", "frame", "globe", "globe-alt", "handbag", "layers", "map", "picture", "pin", "playlist", "present", "printer", "puzzle", "speech", "vector", "wallet", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "bar-chart", "bulb", "calendar", "control-end", "control-forward", "control-pause", "control-play", "control-rewind", "control-start", "cursor", "dislike", "equalizer", "graph", "grid", "home", "like", "list", "login", "logout", "loop", "microphone", "music-tone", "music-tone-alt", "note", "pencil", "pie-chart", "question", "rocket", "share", "share-alt", "shuffle", "size-actual", "size-fullscreen", "support", "tag", "trash", "umbrella", "wrench", "ban", "bubble", "camcorder", "camera", "check", "clock", "close", "cloud-download", "cloud-upload", "doc", "envelope", "eye", "flag", "folder", "heart", "info", "key", "link", "lock", "lock-open", "magnifier", "magnifier-add", "magnifier-remove", "paper-clip", "paper-plane", "plus", "minus", "power", "refresh", "reload", "settings", "star", "symbol-female", "symbol-male", "target", "volume-1", "volume-2", "volume-off"]
  constructor(private toastrService: ToastrService) { }

  //Display Icon detail
  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="icon-' + icon + '"></i>';
  }

  //Copy an icon code
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="icon-' + val + '"></i>';
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

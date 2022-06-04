import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pe7-icon',
  templateUrl: './pe7-icon.component.html',
  styleUrls: ['./pe7-icon.component.scss']
})
export class Pe7IconComponent implements OnInit {
  public detail: boolean = false;
  public icon: string;
  public val: string;
  public icons: string[] = ["album","arc","back-2","bandaid","car","diamond","door-lock","eyedropper","female","gym","hammer","headphones","helm","hourglass","leaf","magic-wand","male","map-2","next-2","paint-bucket","pendrive","photo","piggy","plugin","refresh-2","rocket","settings","shield","smile","usb","vector","wine","cloud-upload","cash","close","bluetooth","cloud-download","way","close-circle","id","angle-up","wristwatch","angle-up-circle","world","angle-right","volume","angle-right-circle","users","angle-left","user-female","angle-left-circle","up-arrow","angle-down","switch","angle-down-circle","scissors","wallet","safe","volume2","volume1","voicemail","video","user","upload","unlock","umbrella","trash","tools","timer","ticket","target","sun","study","stopwatch","star","speaker","signal","shuffle","shopbag","share","server","search","film","science","disk","ribbon","repeat","refresh","add-user","refresh-cloud","paperclip","radio","note2","print","network","prev","mute","power","medal","portfolio","like2","plus","left-arrow","play","key","plane","joy","photo-gallery","pin","phone","plug","pen","right-arrow","paper-plane","delete-user","paint","bottom-arrow","notebook","note","next","news-paper","musiclist","music","mouse","more","moon","monitor","micro","menu","map","map-marker","mail","mail-open","mail-open-file","magnet","loop","look","lock","lintern","link","like","light","less","keypad","junk","info","home","help2","help1","graph3","graph2","graph1","graph","global","gleam","glasses","gift","folder","flag","filter","file","expand1","exapnd2","edit","drop","drawer","download","display2","display1","diskette","date","cup","culture","crop","credit","copy-file","config","compass","comment","coffee","cloud","clock","check","chat","cart","camera","call","calculator","browser","box2","box1","bookmarks","bicycle","bell","battery","ball","back","attention","anchor","albums","alarm","airplay"]
  constructor(private toastrService: ToastrService) { }

  //Display Icon detail
  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="pe-7s-' + icon + '"></i>';
  }

  //Copy an icon code
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="pe-7s-' + val + '"></i>';
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

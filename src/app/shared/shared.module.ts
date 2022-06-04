import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { DragulaModule } from 'ng2-dragula';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CustomizerComponent } from './components/customizer/customizer.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FullComponent } from './components/layout/full/full.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { DisableKeyPressDirective } from './directives/disable-key-press.directive';
import { OnlyAlphabetsDirective } from './directives/only-alphabets.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { ShowOptionsDirective } from './directives/show-options.directive';
import { ChatService } from './services/chat.service';
import { CustomizerService } from './services/customizer.service';
import { NavService } from './services/nav.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    RightSidebarComponent,
    BreadcrumbComponent,
    CustomizerComponent,
    BookmarkComponent,
    FeatherIconsComponent,
    FullComponent,
    ShowOptionsDirective,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    LoaderComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    DragulaModule.forRoot(),
    TranslateModule

  ],
  providers: [
    NavService,
    ChatService,
    CustomizerService,
  ],
  exports: [
    LoaderComponent,
    FeatherIconsComponent,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    TranslateModule
  ],
})
export class SharedModule { }

import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    TranslateModule,
  ],
  providers: [
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
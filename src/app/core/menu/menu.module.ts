import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { SiteNoResponsiveModule } from '@shared/components/site-no-responsive/site-no-responsive.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    SiteNoResponsiveModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }

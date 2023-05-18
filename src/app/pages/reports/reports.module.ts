import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ListTableModule } from '@shared/components/list-table/list-table.module';
import { RequestStateModule } from '@shared/components/request-state/request-state.module';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ReportsComponent,
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ListTableModule,
    RequestStateModule,
    SharedModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class ReportsModule { }

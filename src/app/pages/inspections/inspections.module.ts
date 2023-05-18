import { NgModule } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { InspectionsRoutingModule } from './inspections-routing.module';
import { InspectionsComponent } from './inspections.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';
import { SharedModule } from '@shared/shared.module';
import { ListTableModule } from '@shared/components/list-table/list-table.module';
import { RequestStateModule } from '@shared/components/request-state/request-state.module';
import { InspectionsService } from './shared/services/inspections.service';

@NgModule({
  declarations: [
    InspectionsComponent,
    InspectionDetailsComponent
  ],
  imports: [
    InspectionsRoutingModule,
    NgxMaskDirective,
    ListTableModule,
    MatOptionModule,
    MatSelectModule,
    SharedModule,
    RequestStateModule
  ],
  providers: [
    provideNgxMask(),
    InspectionsService
  ]
})
export class InspectionsModule { }

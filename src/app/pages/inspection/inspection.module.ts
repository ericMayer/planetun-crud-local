import { NgModule } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { InspectionRoutingModule } from './inspection-routing.module';
import { InspectionComponent } from './inspection.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';
import { SharedModule } from '@shared/shared.module';
import { ListTableModule } from '@shared/components/list-table/list-table.module';
import { RequestStateModule } from '@shared/components/request-state/request-state.module';
import { InspectionService } from './shared/services/inspection.service';

@NgModule({
  declarations: [
    InspectionComponent,
    InspectionDetailsComponent
  ],
  imports: [
    InspectionRoutingModule,
    NgxMaskDirective,
    ListTableModule,
    MatOptionModule,
    MatSelectModule,
    SharedModule,
    RequestStateModule
  ],
  providers: [
    provideNgxMask(),
    InspectionService
  ]
})
export class InspectionModule { }

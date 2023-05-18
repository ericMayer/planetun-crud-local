import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { ReportDetailsComponent } from './report-details/report-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent
  },
  {
    path: 'criar',
    component: ReportDetailsComponent,
    data: { pageTitle: 'Criar relatório' }
  },
  {
    path: 'editar/:idReport',
    component: ReportDetailsComponent,
    data: { pageTitle: 'Editar relatório' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

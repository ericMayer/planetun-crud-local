import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InspectionComponent } from './inspection.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';

const routes: Routes = [
  {
    path: '',
    component: InspectionComponent
  },
  {
    path: 'criar',
    component: InspectionDetailsComponent,
    data: { pageTitle: 'Criar inspeção' }
  },
  {
    path: 'editar/:idInspection',
    component: InspectionDetailsComponent,
    data: { pageTitle: 'Editar inspeção' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionRoutingModule { }

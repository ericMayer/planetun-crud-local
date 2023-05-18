import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';

import { MenuComponent } from './core/menu/menu.component';
import { canActivate } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/auth.component').then(component => component.AuthComponent)
  },
  {
    path: '',
    component: MenuComponent,
    canActivate: [canActivate],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inspecoes'
      },
      {
        path: 'inspecoes',
        loadChildren: () => import('./pages/inspections/inspections.module').then(module => module.InspectionsModule),
        data: { pageTitle: 'Inspeções' },
      },
      {
        path: 'relatorios',
        loadChildren: () => import('./pages/reports/reports.module').then(module => module.ReportsModule),
        data: { pageTitle: 'Relatórios' },
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }

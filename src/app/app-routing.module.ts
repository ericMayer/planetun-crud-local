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
    children: [
      {
        path: 'inspecao',
        loadChildren: () => import('./pages/inspection/inspection.module').then(module => module.InspectionModule),
        data: { pageTitle: 'Inspeções' },
        canActivate: [canActivate]
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

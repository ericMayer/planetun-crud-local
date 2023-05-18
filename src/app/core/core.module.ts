import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterceptorModule } from './interceptor/interceptor.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InterceptorModule
  ],
  exports: [
    MenuModule
  ]
})
export class CoreModule { }

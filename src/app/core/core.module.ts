import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterceptorModule } from './interceptor/interceptor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InterceptorModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ListTableComponent } from './list-table.component';
import { SkeletonLoadingModule } from '../skeleton-loading/skeleton-loading.module';

@NgModule({
  declarations: [
    ListTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    SkeletonLoadingModule
  ],
  exports: [
    ListTableComponent
  ]
})
export class ListTableModule { }

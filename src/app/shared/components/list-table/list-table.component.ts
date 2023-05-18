import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Column } from '@shared/interfaces/column.interface';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  @Input({ required: true }) public data: any[] = [];
  @Input({ required: true }) public columns: Column[] = [];
  @Input({ required: true }) public textButton: string;
  @Output() public edit: EventEmitter<any> = new EventEmitter();
  @Output() public create: EventEmitter<void> = new EventEmitter();

  public displayedColumns: string[] = [];

  public ngOnInit(): void {
    this.setDisplayedColumns();
  }

  private setDisplayedColumns(): void {
    this.displayedColumns = this.columns?.map((column: Column) => column?.property);
    this.displayedColumns.push('actions');
  }
}

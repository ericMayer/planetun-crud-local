import { Component } from '@angular/core';

import { RequestState } from '@shared/enums/request-state.enum';
import { Report } from '@shared/interfaces/report.interface';
import { Column } from '@shared/interfaces/column.interface';
import { ReportsService } from '@shared/services/reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  public reports: Report[];

  public columns: Column[] = [
    {
      title: 'ID',
      property: 'id'
    },
    {
      title: 'Status',
      property: 'status'
    },
    {
      title: 'Observação',
      property: 'observation'
    }
  ];
  public requestState: RequestState = RequestState.Loading;
  public requestStates: typeof RequestState = RequestState;

  constructor(
    private reportsService: ReportsService,
    private router: Router
  ) {
    this.getReports();
  }

  private getReports(): void {
    this.reportsService.getReports()
      .subscribe({
        next: (reports: Report[]) => {
          this.reports = reports;
          this.requestState = reports?.length ? RequestState.Success : RequestState.Empty;
        },
        error: () => this.requestState = RequestState.Error
      });
  }

  public goToReportDetails(idInspection?: string): void {
    const path: string = idInspection ? `/relatorios/editar/${idInspection}` : '/relatorios/criar';
    this.router.navigateByUrl(path);
  }
}

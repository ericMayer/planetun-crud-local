import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Report } from '@shared/interfaces/report.interface';
import { ReportsService } from '@shared/services/reports.service';
import { openSnackBarAlert } from '@shared/utils/alert.utils';


@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  @Input() public idReport: string;

  public formReport: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reportsService: ReportsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.createFormInspection();
  }

  public ngOnInit(): void {
    this.getInspectionById();
  }

  private createFormInspection(): void {
    this.formReport = this.fb.group({
      status: [null, Validators.required],
      observation: ['', Validators.required]
    });
  }

  public compareReports = (reportOne: Report, reportTwo: Report): boolean =>
    reportOne?.id === reportTwo?.id;

  private getInspectionById(): void {
    if (this.idReport)
      this.reportsService.getReportById(this.idReport)
        .subscribe({
          next: (report: Report) => this.formReport.patchValue({ ...report }),
          error: () => this.showMessage('Não foi possível carregar o relatório 😢, por favor tente novamente.')
        });

  }

  public showErrorByField = (field: string, error: string): boolean =>
    this.formReport.get(field)?.hasError?.(error);

  public getTextButtonConfirm = (): string =>
    this.idReport ? 'Editar relatório' : 'Criar relatório';

  private showMessage(message: string, isSuccess?: boolean): void {
    openSnackBarAlert(this.snackBar, {
      message,
      isSuccess
    });

    if (isSuccess) this.router.navigateByUrl('relatorios');
  }

  private updateReport(): void {
    this.reportsService.updateReport({ ...this.formReport.value, id: this.idReport })
      .subscribe({
        next: () => this.showMessage('Relatório atualizado com sucesso 🚀!', true),
        error: () => this.showMessage('Não foi possível atualizar o relatório 😢, por favor tente novamente.')
      });
  }

  private createReport(): void {
    this.reportsService.createReport(this.formReport?.value)
      .subscribe({
        next: () => this.showMessage('Relatório cadastrado com sucesso 🚀!', true),
        error: () => this.showMessage('Não foi possível cadastrar o relatório 😢, por favor tente novamente.')
      });
  }

  public submitReport(): void {
    if (this.formReport?.valid) {
      if (this.idReport) this.updateReport();
      else this.createReport();
    }
  }
}

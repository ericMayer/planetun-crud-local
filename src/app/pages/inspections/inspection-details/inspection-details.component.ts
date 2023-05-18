import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Report } from '@shared/interfaces/report.interface';
import { InspectionsService } from '@pages/inspections/shared/services/inspections.service';
import { ReportsService } from '@shared/services/reports.service';
import { Inspection } from '@pages/inspections/shared/interfaces/inspection.interface';
import { openSnackBarAlert } from '@shared/utils/alert.utils';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.scss']
})
export class InspectionDetailsComponent implements OnInit {

  @Input() public idInspection: string;

  public formInspection: FormGroup;
  public reports$: Observable<Report[]> = this.reportsService.getReports();

  constructor(
    private fb: FormBuilder,
    private inspectionsService: InspectionsService,
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
    this.formInspection = this.fb.group({
      companyId: ['', Validators.required],
      brokerCode: ['', Validators.required],
      productCode: ['', Validators.required],
      productName: ['', Validators.required],
      inspectionNumber: [null, Validators.required],
      reports: [[], [Validators.required, Validators.minLength(2)]]
    });
  }

  public compareReports = (reportOne: Report, reportTwo: Report): boolean =>
    reportOne?.id === reportTwo?.id;

  private getInspectionById(): void {
    if (this.idInspection)
      this.inspectionsService.getInspectionById(this.idInspection)
        .subscribe({
          next: (inspection: Inspection) => this.formInspection.patchValue({ ...inspection }),
          error: () => this.showMessage('Não foi possível carregar a inspeção 😢, por favor tente novamente.')
        });
  }

  public showErrorByField = (field: string, error: string): boolean =>
    this.formInspection.get(field)?.hasError?.(error);

  public getTextButtonConfirm = (): string =>
    this.idInspection ? 'Editar inspeção' : 'Criar inspeção';



  private showMessage(message: string, isSuccess?: boolean): void {
    openSnackBarAlert(this.snackBar, {
      message,
      isSuccess
    });

    if (isSuccess) this.router.navigateByUrl('inspecoes');
  }

  private updateInspection(): void {
    this.inspectionsService.updateInspection({ ...this.formInspection.value, id: this.idInspection })
      .subscribe({
        next: () => this.showMessage('Inspeção atualizada com sucesso 🚀!', true),
        error: () => this.showMessage('Não foi possível atualizar a inspeção 😢, por favor tente novamente.')
      });
  }

  private createInspection(): void {
    this.inspectionsService.createInspection(this.formInspection?.value)
      .subscribe({
        next: () => this.showMessage('Inspeção cadastrada com sucesso 🚀!', true),
        error: () => this.showMessage('Não foi possível cadastrar a inspeção 😢, por favor tente novamente.')
      });
  }

  public submitInspection(): void {
    if (this.formInspection?.valid) {
      if (this.idInspection) this.updateInspection();
      else this.createInspection();
    }
  }
}

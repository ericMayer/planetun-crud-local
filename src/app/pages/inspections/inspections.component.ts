import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Inspection } from '@pages/inspections/shared/interfaces/inspection.interface';
import { InspectionsService } from '@pages/inspections/shared/services/inspections.service';
import { Column } from '@shared/interfaces/column.interface';
import { RequestState } from '@shared/enums/request-state.enum';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent {

  public inspections: Inspection[];

  public columns: Column[] = [
    {
      title: 'ID da empresa',
      property: 'companyId'
    },
    {
      title: 'Código do corretor',
      property: 'brokerCode'
    },
    {
      title: 'Código do produto',
      property: 'productCode'
    },
    {
      title: 'Nome do produto',
      property: 'productName'
    },
    {
      title: 'Número de inspeção',
      property: 'inspectionNumber'
    }
  ];
  public requestState: RequestState = RequestState.Loading;
  public requestStates: typeof RequestState = RequestState;

  constructor(
    private inspectionsService: InspectionsService,
    private router: Router
  ) {
    this.getInspections();
  }

  private getInspections(): void {
    this.inspectionsService.getInspections()
      .subscribe({
        next: (inspections: Inspection[]) => {
          this.inspections = inspections;
          this.requestState = inspections?.length ? RequestState.Success : RequestState.Empty;
        },
        error: () => this.requestState = RequestState.Error
      });
  }

  public goToInspectionDetails(idInspection?: string): void {
    const path: string = idInspection ? `/inspecoes/editar/${idInspection}` : '/inspecoes/criar';
    this.router.navigateByUrl(path);
  }
}

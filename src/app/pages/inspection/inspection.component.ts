import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Inspection } from '@pages/inspection/shared/interfaces/inspection.interface';
import { InspectionService } from '@pages/inspection/shared/services/inspection.service';
import { Column } from '@shared/interfaces/column.interface';
import { RequestState } from '@shared/enums/request-state.enum';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent {

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

  constructor(
    private inspectionService: InspectionService,
    private router: Router
  ) {
    this.getInspections();
  }

  private getInspections(): void {
    this.inspectionService.getInspections()
      .subscribe({
        next: (inspections: Inspection[]) => {
          this.inspections = inspections;
          this.requestState = inspections?.length ? RequestState.Success : RequestState.Empty;
        },
        error: () => this.requestState = RequestState.Error
      });
  }

  public goToInspectionDetails(idInspection?: string): void {
    const path: string = idInspection ? `/inspecao/editar/${idInspection}` : '/inspecao/criar';
    this.router.navigateByUrl(path);
  }
}

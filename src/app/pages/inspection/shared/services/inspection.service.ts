import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpService } from '@shared/services/http.service';
import { Inspection } from '@pages/inspection/shared/interfaces/inspection.interface';
import { environment } from '@environments/environment';

@Injectable()
export class InspectionService {

  constructor(private http: HttpService) { }

  public getInspections = (): Observable<Inspection[]> =>
    this.http.get(`${environment.data}/inspection`);

  public createInspection = (inspection: Inspection): Observable<boolean> =>
    this.http.post(`${environment.data}/inspection`, inspection);

  public updateInspection = (inspection: Inspection): Observable<boolean> =>
    this.http.put(`${environment.data}/inspection/${inspection?.id}`, inspection);

  public getInspectionById = (idInspection: string): Observable<Inspection> =>
    this.http.get(`${environment.data}/inspection/${idInspection}`);
}

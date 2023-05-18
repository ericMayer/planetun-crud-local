import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { HttpService } from './http.service';
import { Report } from '@shared/interfaces/report.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpService) { }

  public getReports = (): Observable<Report[]> =>
    this.http.get(`${environment.data}/report`);

  public createReport = (report: Report): Observable<boolean> =>
    this.http.post(`${environment.data}/report`, report);

  public updateReport = (report: Report): Observable<boolean> =>
    this.http.put(`${environment.data}/report/${report?.id}`, report);

  public getReportById = (idReport: string): Observable<Report> =>
    this.http.get(`${environment.data}/report/${idReport}`);
}

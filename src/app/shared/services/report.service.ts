import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { HttpService } from './http.service';
import { Report } from '@shared/interfaces/report.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpService) { }

  public getInspections(): Observable<Report[]> {
    return this.http.get(`${environment.data}/report`);
  }
}

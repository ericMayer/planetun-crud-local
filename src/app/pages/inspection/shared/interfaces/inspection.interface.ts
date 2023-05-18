import { Report } from "../../../../shared/interfaces/report.interface";

export interface Inspection {
  id: number;
  companyId: string;
  brokerCode: string;
  productCode: string;
  productName: string;
  inspectionNumber: number;
  reports: Report[];
}

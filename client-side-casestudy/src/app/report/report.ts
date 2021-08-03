import { ReportItem } from './report-item';
/**
 * Report - interface for product report
 */
export interface Report {
  id: number;
  vendorid: number;
  amount: number;
  items: ReportItem[];
}

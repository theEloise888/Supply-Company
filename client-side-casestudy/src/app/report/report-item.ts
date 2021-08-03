/**
 * ReportItem - container class for product report item
 */
export interface ReportItem {
  id: number;
  price: number;
  productid: string;
  po: number;
  qty: number;
  costprice: number;
  name: string;
}

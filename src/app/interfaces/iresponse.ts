import { Iproduct } from './iproduct';

export interface Iresponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: Iproduct[];
}

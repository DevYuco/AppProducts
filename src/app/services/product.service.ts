import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iresponse } from '../interfaces/iresponse';
import { Observable } from 'rxjs';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/products';

  constructor() {}

  getAll(): Observable<Iresponse> {
    return this.httpClient.get<Iresponse>(this.baseUrl);
  }
  getById(_id: string): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(this.baseUrl + '/' + _id);
  }
}

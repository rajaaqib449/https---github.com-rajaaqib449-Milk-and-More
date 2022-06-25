import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Iproduct } from '../../app/Interface/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllRecord():Observable<Iproduct>{
    return this.http.get<any>('assets/Json/Product.json')
  }
}

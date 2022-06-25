import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iourshop } from '../Interface/ourShop';
@Injectable({
  providedIn: 'root'
})
export class OurShopService {

  constructor(private http:HttpClient) { }

  getAllRecord():Observable<Iourshop>{
    return this.http.get<any>('/assets/Json/ourShop.json')
  }
}

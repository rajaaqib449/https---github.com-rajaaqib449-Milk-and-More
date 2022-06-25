import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import{IfreshMilk} from '../Interface/freshMilk'
@Injectable({
  providedIn: 'root'
})
export class FreshMilkService {

  constructor(private http:HttpClient) {

   }

getAllRecord():Observable<IfreshMilk>{
  return this.http.get<any>('assets/Json/freshMilk.json')
}
}

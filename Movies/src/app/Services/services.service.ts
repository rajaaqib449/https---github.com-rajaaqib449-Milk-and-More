import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Iservices } from '../Interface/Services';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient ) {

   }
   getAllRecord():Observable<Iservices> {
    return this.http.get<any>('assets/Json/Services.json')
  }
}

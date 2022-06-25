import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {ICrousal } from '../Interface/CrousalModel';

@Injectable({
  providedIn: 'root'
})
export class CrousalService {


  constructor( private http: HttpClient) {

    this.getAllRecord().subscribe(data =>{
      console.log(data)
    })

   }
  
  getAllRecord():Observable<any> {
    return this.http.get<any>('assets/Json/Crousal.json')
  }
  
}

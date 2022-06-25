import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Ifeatured } from '../Interface/Featured';
@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  constructor(private http:HttpClient) { }

  getAllRecord():Observable<Ifeatured>{
    return this.http.get<any>('assets/Json/Featured.json')
  }
}

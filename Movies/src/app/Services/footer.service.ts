import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifooter } from '../Interface/Footer';
@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http:HttpClient) { }
getAllRecord():Observable<Ifooter>{
  return this.http.get<any>('assets/Json/Footer.json')
}
}

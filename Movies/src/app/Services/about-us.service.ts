import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IaboutUS } from '../Interface/aboutUs';
@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private https:HttpClient) { }
  getAllRecord():Observable<IaboutUS>{
    return this.https.get<any>('assets/Json/aboutUs.json')
  }
}

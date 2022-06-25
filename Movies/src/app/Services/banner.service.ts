
import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Ibanner } from '../Interface/bannerData';
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { 
    
  }
  getAllRecord():Observable<Ibanner> {
    return this.http.get<any>('assets/Json/Banner.json')
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iblog } from '../Interface/Blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpclient:HttpClient) {
 
   }

   getAllRecord():Observable<Iblog> {
    return this.httpclient.get<any>('assets/Json/Blog.json')
  }
}

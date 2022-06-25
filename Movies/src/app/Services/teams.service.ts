import { Injectable } from '@angular/core';
import { IteamsData } from '../Interface/Teams';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }

  getAllRecord():Observable<IteamsData>{
    return this.http.get<any>('assets/Json/Teams.json')
  }
}

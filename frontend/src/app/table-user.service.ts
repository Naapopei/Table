import { Injectable } from '@angular/core';
import { User } from './users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableUserService {

  constructor(private readonly http: HttpClient) { }
 
  get(url: string): Observable<any> {
    return this.http.get(url);}
}

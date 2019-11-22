import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.http.post<boolean>('api/add-user', { user });
  }

  deleteUser(userId:string){
    return this.http.post(`api/delete/${userId}`, {});
  }
  changeUser(user: User,userId: string){
    return this.http.post(`api/change/${userId}`,user);
  }
  linkUser(userId: string){
    return this.http.post(`api/link/${userId}`, {});
  }
}

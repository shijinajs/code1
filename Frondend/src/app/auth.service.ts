import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loginDetailesToBackend(data:any){
    return this.http.post <any>('http://localhost:8525/api/login',{data})
  }
}

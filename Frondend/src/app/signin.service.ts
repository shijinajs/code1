import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
apiUrl:any='http://localhost:8525/api'
  constructor(private http:HttpClient) { }
  addData(data:any){
    return this.http.post(`${this.apiUrl}/signup`,data)
  }
}


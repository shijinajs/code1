import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiURL:String='http://localhost:8525/api'
  constructor(private api:HttpClient) { }
  //get studentlist
  getBookList(){
    return this.api.get(`${this.apiURL}/Booklist`)
  }
  //delete Book
  deleteBook(id:any){
    return this.api.delete(`${this.apiURL}/Book/${id}`)
  }
  //add Book
  addBook(data:any){
    return this.api.post(`${this.apiURL}/Book`,data)
  }
  //update Book
  updateBook(data:any){
    return this.api.put(`${this.apiURL}/Book`,data)
  }
  //getsingleBook
  getSingleBook(id:any){
    return this.api.get(`${this.apiURL}/Book/${id}`)
  }
}

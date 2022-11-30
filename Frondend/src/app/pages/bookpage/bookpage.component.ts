import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {
  students:any=[]
 
  constructor(private api:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.api.getBookList().subscribe(res=>{
      this.students=res
    })
  }
  deletedata(id:any){
    this.api.deleteBook(id).subscribe(res=>{
     this.getData();
    
    
    })
    }
    getsingledata(id:any){
      this.router.navigate([`/edit/${id}`])
    }
}

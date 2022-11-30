import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormGroup,FormControl,Validators}from '@angular/forms'
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookForm:any=new FormGroup({
    'title':new FormControl(''),
    'author':new FormControl(''),
    'content':new FormControl(''),
    'price':new FormControl('')
  })
  constructor(private api:ServiceService,private location:Location) { }

  ngOnInit(): void {
  }
  onsubmit(){
    this.api.addBook(this.bookForm.value).subscribe({
      complete:()=>{
        console.log(this.bookForm.value)
        alert('data saved successfully')
        this.bookForm.reset();
      },
      error:()=>{
        alert('error')
      }
    })
}
backClicked(){
  this.location.back();
}
}

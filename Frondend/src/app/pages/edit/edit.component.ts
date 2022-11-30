import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  
  constructor(private api:ServiceService,private router:Router,private route:ActivatedRoute) { }
  
  
  bookForm:any=new FormGroup({
    'title':new FormControl(''),
    'author':new FormControl(''),
    'content':new FormControl(''),
    'price':new FormControl('')
  })
  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    this.api.getSingleBook(this.id).subscribe((res:any)=>{
      this.bookForm=new FormGroup({
        'title':new FormControl(res['title']),
        'author':new FormControl(res['author']),
        'content':new FormControl(res['content']),
        'price':new FormControl(res['price'])
      })
      
    })
  }
  onsubmit(){
this.api.updateBook(this.bookForm.value).subscribe({
  complete:()=>{
 alert('data saved completly')
 this.router.navigate(['/book'])
  }
})

}


}

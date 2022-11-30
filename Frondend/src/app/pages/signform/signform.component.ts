import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/signin.service';
@Component({
  selector: 'app-signform',
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.css']
})
export class SignformComponent implements OnInit {
  Data:any
user={
  username:'',
  email:'',
  phone:'',
  password:''
}

  constructor(private api:SigninService,private router:Router) { }

  ngOnInit(): void {
  }
  verify(signform:NgForm){
    console.log(signform)
    this.user={
      username:signform.value.username,
      email:signform.value.email,
      phone:signform.value.phone,
      password:signform.value.password
    }
   this.api.addData(this.user).subscribe((res)=>{
   console.log(this.user)
   this.router.navigate(['/book'])
   })
  
}
}

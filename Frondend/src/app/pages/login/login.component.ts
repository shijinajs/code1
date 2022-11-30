import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null)
  })
  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginForm.value)
    let data=this.loginForm.value;
    this.auth.loginDetailesToBackend(data)
    .subscribe(res=>{
      console.log('data from backend',res)
      localStorage.setItem('token',res.token)
    })
    this.router.navigate(['/book'])
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage=null

  constructor(
    private auth : AuthService,
    private router: Router
    ){}

  onSubmit(form: NgForm){
    if(this.auth.login(form.value.email, form.value.password)){
      this.router.navigate(['customer'])
    }else{
      this.errorMessage="User not valid"
    }
  }

  isAdmin(){
    console.log(this.auth.isAdmin()) 
  }

}

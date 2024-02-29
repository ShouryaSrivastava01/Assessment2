import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent implements OnInit {
  errorMessage=null
  user: any={
    id:'0',
    name:'',
    email:'',
    phone:'',
    address:''
  }
  constructor(
    private route: ActivatedRoute, 
    private customer : CustomerService,
    private router : Router,
    private validation:ValidationService
    ){}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get("id");
    this.user = this.customer.getUserById(parseInt(userId));
    console.log(this.user)
  }

  onSubmit(){
    if(!this.validation.validateEmail(this.user.email)){
      this.errorMessage="Invalid Email Format"
      return;
    }
    if(!this.validation.validatePhone(this.user.phone)){
      this.errorMessage="Invalid Phone Format"
    }
    this.customer.updateUser(this.user);


    
    this.router.navigate(['customer'])

    
  }
}

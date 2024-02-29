import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  errorMessage=null
  constructor(
    private customer: CustomerService,
    private router: Router,
    private validation:ValidationService
    ){}
  onSubmit(form: NgForm){
    
    let user = {
      id : this.generateId(),
      name : form.value.name,
      email : form.value.email,
      phone : form.value.phone,
      address : form.value.address
    }

    if(!this.validation.validateName(user.name)){
      this.errorMessage="Invalid Name Format"
      return false
    }
    
    if(!this.validation.validateEmail(user.email)){
      this.errorMessage = "Invalid Email Format"
      return false;
    } 
    if(!this.validation.validatePhone(user.phone)){
      this.errorMessage = "Invalid Phone Number"
      return false;
    } 
    if(!this.validation.validateAddress(user.address)){
      this.errorMessage="Invalid Address Format"
      return false
    }
    

    this.customer.addUser(user)
    this.router.navigate(['customer'])

  }

  private generateId():number{
    return Math.floor(Math.random()*1000)+1
  }
}

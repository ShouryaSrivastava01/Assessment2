import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  users: any[];

  constructor(private customer : CustomerService){}

  ngOnInit(): void {
    this.users = this.customer.getUsers()
  }
}

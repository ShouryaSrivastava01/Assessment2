import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  user:any;

    constructor(
      private route : ActivatedRoute, 
      private customer: CustomerService,
      private auth: AuthService,
      private router: Router
      ){}

    ngOnInit(): void {
      const userId = this.route.snapshot.paramMap.get("id");
      this.user = this.customer.getUserById(parseInt(userId));
      console.log(this.user)
      

    }
  
  // onSubmit(){
  //   this.taskService.updateTask(this.task);
  // }
  isAdmin():boolean{
    return this.auth.isAdmin()
  }
  onDelete(id:number){
    if(this.auth.isAdmin()){
      const result = window.confirm("Are you sure want to delete this customer?")
      if(result){
        this.customer.deleteUser(id)
        this.router.navigate(['customer'])
      }
    }

  }

}

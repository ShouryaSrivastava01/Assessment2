import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers : any[] = JSON.parse(localStorage.getItem('customers')|| '[]')

  constructor() { }

  getUsers():any[]{
    return this.customers;
  }

  getUserById(id:number): any{
    return this.customers.find(task=>task.id===id)
  }

  addUser(user:any):void{
    this.customers.push(user);
    this.saveToLocalStorage()
    
  }

  updateUser(task:any):void{
    const idx = this.customers.findIndex(t => t.id === task.id);
    this.customers[idx] = {...this.customers[idx],...task};
    this.saveToLocalStorage()
  }

  deleteUser(id:number){
    this.customers = this.customers.filter(user => user.id !== id)
    this.saveToLocalStorage()
  }

  private saveToLocalStorage():void{
    localStorage.setItem('customers', JSON.stringify(this.customers))
  }
}

import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assessment2';
  isCollapsed:boolean
  constructor(
    private auth: AuthService,
    private router: Router){}

  isLogginIn():boolean{
    return this.auth.isLoggedIn()
  }

  logout(){
    this.auth.logout()
    this.router.navigate(['customer'])

  }

}

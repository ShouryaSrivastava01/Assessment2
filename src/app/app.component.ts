import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assessment2';
  constructor(private auth: AuthService){}

  isLogginIn():boolean{
    return this.auth.isLoggedIn()
  }

  logout(){
    this.auth.logout()
  }
}

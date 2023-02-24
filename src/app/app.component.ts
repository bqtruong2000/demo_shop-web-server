import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ShopWeb';

  constructor(
    private auth: Auth,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authService.user = user;
        this.router.navigateByUrl('/home');
      } else {
        console.log('No user!');
        this.authService.user = null;
      }
    });
  }
}

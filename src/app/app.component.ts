import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Security App';

  isLogin: Observable<boolean> | undefined;

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/logout']);
  }
}

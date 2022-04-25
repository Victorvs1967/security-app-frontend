import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Security App';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}

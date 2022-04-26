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

  isAuthenticated: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authenticationService.isUserAuthenticated();
  }

  logout() {
    this.authenticationService.logout();
    window.location.reload();
    this.router.navigate(['']);
  }
}

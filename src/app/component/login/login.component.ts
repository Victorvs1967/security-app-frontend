import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message!: string;
  public loginForm!: FormGroup;

  constructor(private auth: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(data => {
        this.loginForm.reset();
        if (this.auth.isLoggedIn) this.router.navigate(['announcement']);
      });
  }

}

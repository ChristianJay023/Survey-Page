import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  proceedToSurvey() {
    this.router.navigate(['/survey-page'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.myForm();
  }

  myForm() {
    this.LoginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    })
  }

  onClick() {
    if(this.LoginForm.value['username'] === null) {
      window.alert('Username required!');
      return;
    }
    if(this.LoginForm.value['password'] === null) {
      window.alert('Password required!');
      return;
    }
    if(this.LoginForm.value['username'] != 'Cjay' || this.LoginForm.value['password'] != 'Enter') {
      window.alert('Enter a valid username or password.');
      return;
    }
    const adminHasEntered = true;
    this.appService.admin.next(adminHasEntered);
    this.LoginForm.reset();
    this.router.navigate(['/survey-page'], {relativeTo: this.route});
  }


}

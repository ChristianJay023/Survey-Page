import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.page.html',
  styleUrls: ['./survey-page.page.scss'],
})
export class SurveyPagePage implements OnInit {

  surveyPage: FormGroup;
  doesAdminEnter: boolean = false;
  dateTime = '';
  isSurveySubmitted: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.myForm();
    this.appService.admin.subscribe((adminEntered: boolean) => {
      console.log(adminEntered);
      this.doesAdminEnter = adminEntered;
    });
  }

  myForm() {
    this.surveyPage = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'q1': new FormControl('', Validators.required),
      'q2': new FormControl('', Validators.required),
      'q3': new FormControl('', Validators.required),
      'q4': new FormControl('', Validators.required),
      'q5': new FormControl('', Validators.required),
      'date-time': new FormControl({value: null, disabled : true})
    })
  }

  toggleDashboard() {
    this.surveyPage.reset();
    this.router.navigate(['/dashboard'], {relativeTo: this.route});
  }

  toggleReport() {
    this.appService.admin.next(true);
    this.router.navigate(['/report'], {relativeTo: this.route});
  }

  toggleLogOut() {
    this.surveyPage.reset();
    this.appService.admin.next(false);
    this.router.navigate(['/login'], {relativeTo: this.route});
  }

  toggleLogIn() {
    this.surveyPage.reset();
    this.appService.admin.next(false);
    this.router.navigate(['/login'], {relativeTo: this.route});
  }

  toggleResetSurvey() {
    const resetSurvey = confirm('Reset the survey?');
    if ( resetSurvey === false ) {
      return;
    }
    else {
      this.surveyPage.reset();
    }
  }

  toggleSubmit() {
    this.isSurveySubmitted = true;
    if (this.surveyPage.invalid === true) {
      window.alert('Answer all the required fields.');
      return;
    }
  }

  ClickMe() {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    this.dateTime = `${date} ${time}`;
  }
}


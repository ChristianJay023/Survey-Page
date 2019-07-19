import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPagePage } from './survey-page.page';

describe('SurveyPagePage', () => {
  let component: SurveyPagePage;
  let fixture: ComponentFixture<SurveyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

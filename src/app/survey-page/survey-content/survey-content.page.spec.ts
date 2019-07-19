import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyContentPage } from './survey-content.page';

describe('SurveyContentPage', () => {
  let component: SurveyContentPage;
  let fixture: ComponentFixture<SurveyContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

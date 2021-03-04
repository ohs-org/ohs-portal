import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireProgressBarComponent } from './questionnaire-progress-bar.component';

describe('QuestionnaireProgressBarComponent', () => {
  let component: QuestionnaireProgressBarComponent;
  let fixture: ComponentFixture<QuestionnaireProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

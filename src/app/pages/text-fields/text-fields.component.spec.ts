import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldsComponent } from './text-fields.component';

describe('TextFieldsComponent', () => {
  let component: TextFieldsComponent;
  let fixture: ComponentFixture<TextFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

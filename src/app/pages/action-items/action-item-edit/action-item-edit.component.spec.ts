import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionItemEditComponent } from './action-item-edit.component';

describe('ActionItemEditComponent', () => {
  let component: ActionItemEditComponent;
  let fixture: ComponentFixture<ActionItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

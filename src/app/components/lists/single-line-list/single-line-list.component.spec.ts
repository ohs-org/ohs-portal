import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLineListComponent } from './single-line-list.component';

describe('SingleLineListComponent', () => {
  let component: SingleLineListComponent;
  let fixture: ComponentFixture<SingleLineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

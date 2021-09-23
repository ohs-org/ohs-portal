import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NastedTableComponent } from './nasted-table.component';

describe('NastedTableComponent', () => {
  let component: NastedTableComponent;
  let fixture: ComponentFixture<NastedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NastedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NastedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

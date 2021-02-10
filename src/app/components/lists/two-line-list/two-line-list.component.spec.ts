import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLineListComponent } from './two-line-list.component';

describe('TwoLineListComponent', () => {
  let component: TwoLineListComponent;
  let fixture: ComponentFixture<TwoLineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoLineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLineAvatarSelectionListComponent } from './two-line-avatar-selection-list.component';

describe('TwoLineAvatarSelectionListComponent', () => {
  let component: TwoLineAvatarSelectionListComponent;
  let fixture: ComponentFixture<TwoLineAvatarSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoLineAvatarSelectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLineAvatarSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

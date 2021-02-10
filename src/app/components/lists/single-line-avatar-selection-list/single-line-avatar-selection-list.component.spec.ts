import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLineAvatarSelectionListComponent } from './single-line-avatar-selection-list.component';

describe('SingleLineAvatarSelectionListComponent', () => {
  let component: SingleLineAvatarSelectionListComponent;
  let fixture: ComponentFixture<SingleLineAvatarSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLineAvatarSelectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLineAvatarSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

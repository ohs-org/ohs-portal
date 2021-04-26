import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxPanelComponent } from './inbox-panel.component';

describe('InboxPanelComponent', () => {
  let component: InboxPanelComponent;
  let fixture: ComponentFixture<InboxPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TrackingCard } from './../../../models/tracking-card.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-panel',
  templateUrl: './tracking-panel.component.html',
  styleUrls: ['./tracking-panel.component.scss'],
})
export class TrackingPanelComponent implements OnInit {
  trackingCards: TrackingCard[] = [
    { title: 'Vacation Hours Left', contents: '50 hours' },
    { title: 'NEXT VACATION DAY', contents: 'April 26th' },
    { title: 'SICK DAYS LEFT', contents: '5 days' },
    { title: 'NEXT PAY DAY', contents: 'May 28th' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

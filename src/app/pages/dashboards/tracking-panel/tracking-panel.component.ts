import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-panel',
  templateUrl: './tracking-panel.component.html',
  styleUrls: ['./tracking-panel.component.scss'],
})
export class TrackingPanelComponent implements OnInit {
  trackingCards = [
    { title: 'VACATION HOURS LEFT', contents: '50 hours' },
    { title: 'NEXT VACATION DAY', contents: 'April 26th' },
    { title: 'SICK DAYS LEFT', contents: '5 days' },
    { title: 'NEXT PAY DAY', contents: 'May 28th' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

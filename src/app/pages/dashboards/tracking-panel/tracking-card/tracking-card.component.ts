import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracking-card',
  templateUrl: './tracking-card.component.html',
  styleUrls: ['./tracking-card.component.scss'],
})
export class TrackingCardComponent implements OnInit {
  // @Input() trackingCard: any;

  constructor() {}

  ngOnInit(): void {
    // capitalize title
    // this.trackingCard.title = this.trackingCard.title.toUpperCase();
  }
}

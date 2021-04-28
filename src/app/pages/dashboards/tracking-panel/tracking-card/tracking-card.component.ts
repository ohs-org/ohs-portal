import { TrackingCard } from './../../../../models/tracking-card.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracking-card',
  templateUrl: './tracking-card.component.html',
  styleUrls: ['./tracking-card.component.scss'],
})
export class TrackingCardComponent implements OnInit {
  @Input() trackingCard: TrackingCard;

  constructor() {}

  ngOnInit(): void {
    // capitalize title
    this.trackingCard.title = this.trackingCard.title.toUpperCase();
    console.log(this.trackingCard);
  }
}

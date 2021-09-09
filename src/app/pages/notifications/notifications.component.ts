import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `notifications.component.scss` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class NotificationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

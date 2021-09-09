import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `notifications.component.scss` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class NotificationsComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar = (message: string, action: string) => {
    // action first letter capitalize
    this._snackBar.open(message, action);
  };
}

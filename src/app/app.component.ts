import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None, // this for tooltip
})
export class AppComponent implements OnInit {
  title = 'OHS Portal';

  constructor() {}

  ngOnInit() {}
}

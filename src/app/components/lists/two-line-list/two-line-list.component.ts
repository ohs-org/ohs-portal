import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-line-list',
  templateUrl: './two-line-list.component.html',
  styleUrls: ['./two-line-list.component.scss'],
})
export class TwoLineListComponent implements OnInit {
  listItems = [
    {
      primary: 'Two-line item',
      secondary: 'Secondary item',
    },
    {
      primary: 'Two-line item',
      secondary: 'Secondary item',
    },
    {
      primary: 'Two-line item',
      secondary: 'Secondary item',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

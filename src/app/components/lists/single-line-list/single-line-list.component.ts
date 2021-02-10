import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-line-list',
  templateUrl: './single-line-list.component.html',
  styleUrls: ['./single-line-list.component.scss'],
})
export class SingleLineListComponent implements OnInit {
  listItems: string[] = [
    'Single-line item',
    'Single-line item',
    'Single-line item',
  ];
  constructor() {}

  ngOnInit(): void {}
}

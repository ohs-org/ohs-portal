import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-block',
  templateUrl: './summary-block.component.html',
  styleUrls: ['./summary-block.component.scss'],
})
export class SummaryBlockComponent implements OnInit {
  @Input() sectionSummary;

  constructor() {}

  ngOnInit(): void {
    console.log(this.sectionSummary);
  }
}

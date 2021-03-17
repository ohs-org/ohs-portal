import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-block',
  templateUrl: './summary-block.component.html',
  styleUrls: ['./summary-block.component.scss'],
})
export class SummaryBlockComponent implements OnInit {
  @Input() sectionSummary;
  @Input() fieldPortion: number;

  valueWidth: number;

  constructor() {}

  ngOnInit(): void {
    this.valueWidth = 12 - this.fieldPortion;
    console.log(this.sectionSummary);
    console.log(this.fieldPortion);
    console.log(this.valueWidth);
  }
}

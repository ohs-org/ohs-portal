import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-block',
  templateUrl: './summary-block.component.html',
  styleUrls: ['./summary-block.component.scss'],
})
export class SummaryBlockComponent implements OnInit {
  @Input() sectionSummary;
  @Input() fieldPortion: number;

  valuePortion: number;
  fieldClass: string;
  valueClass: string;

  constructor() {}

  ngOnInit(): void {
    this.valuePortion = 12 - this.fieldPortion;
    this.fieldClass = `col-${this.fieldPortion}`;
    this.valueClass = `col-${this.valuePortion}`;

    console.log(this.sectionSummary);
    console.log(this.fieldClass);
    console.log(this.valueClass);
  }

  calculateFieldPortion() {
    return this.fieldClass;
  }

  calculateValuePortion() {
    return this.valueClass;
  }
}

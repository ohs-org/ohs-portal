import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-summary-block',
  templateUrl: './summary-block.component.html',
  styleUrls: ['./summary-block.component.scss'],
})
export class SummaryBlockComponent implements OnInit {
  @Input() sectionSummary;
  @Input() fieldPortion: number;
  @Input() bgColor;
  @Output() editClickEvent = new EventEmitter<number>();

  valuePortion: number;
  fieldClass: string;
  valueClass: string;

  constructor() {}

  ngOnInit(): void {
    this.valuePortion = 12 - this.fieldPortion;
    this.fieldClass = `col-${this.fieldPortion}`;
    this.valueClass = `col-${this.valuePortion}`;
  }

  calculateFieldPortion() {
    return this.fieldClass;
  }

  calculateValuePortion() {
    return this.valueClass;
  }

  getBackgroundColor() {
    return {
      backgroundColor: this.bgColor,
    };
  }

// Emit sectionIndex to the Parent(stepper)
  onEditClick() {
    this.editClickEvent.emit(this.sectionSummary.stepperIndex);
  }
}

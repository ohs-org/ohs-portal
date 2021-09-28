import { TestedHcwService } from './../../services/tested-hcw.service';
import { Component, OnInit } from '@angular/core';

export interface TestedHCW {
  originRegion: string;
  tested: number;
  positive: number;
}

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
})
export class BasicTableComponent implements OnInit {
  testedHCW: TestedHCW[];

  cols: any[];

  constructor(private testedHcwService: TestedHcwService) {}

  ngOnInit(): void {
    this.testedHcwService
      .getTestedHCW()
      .then((data) => (this.testedHCW = data));
    this.cols = [
      { field: 'originRegion', header: 'Origin of exposure' },
      { field: 'tested', header: 'HCWs tested' },
      { field: 'positive', header: 'Positive HCWs' },
    ];
  }
}

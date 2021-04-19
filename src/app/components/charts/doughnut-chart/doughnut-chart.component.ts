import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, Color, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  @Input() chartTitle: string = '';
  @Input() chartLabels: Label[];
  @Input() chartData: SingleDataSet;
  @Input() chartType: ChartType;

  options: any;

  // chartLabels: Label[] = ['assigned', 'in-progress', 'completed'];
  // chartData: SingleDataSet = [55, 25, 20];
  // chartType: ChartType = 'doughnut';
  // colors: Color[] = [
  //   {
  //     backgroundColor: [
  //       'rgba(124, 179, 66, .8)',
  //       'rgba(3, 155, 229, .8)',
  //       'rgba(255, 141, 48, .8)',
  //     ],
  //   },
  // ];

  // doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  // doughnutChartData: MultiDataSet = [[55, 25, 20]];
  // doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {
    this.options = {
      title: {
        text: this.chartTitle,
        display: true,
      },
      legend: { position: 'right' },
    };
  }
}

// Angular Chart.js integration tutorial: https://www.positronx.io/angular-chart-js-tutorial-with-ng2-charts-examples/

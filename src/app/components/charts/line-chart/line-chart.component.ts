import { Label, Color } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  // chart responsive styles
  width: number = 80;
  height: number = 80;

  public lineChartData: ChartDataSets[] = [
    { label: 'Injuries', data: [65, 59, 80, 81, 56, 55, 40] },
    { label: 'Mental Health', data: [20, 40, 80, 60, 23, 55, 80] },
    { label: 'Bullying & Harassment', data: [2, 0, 2, 2, 2, 2, 2] },
  ];

  public lineChartLabels: Label[] = [
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
  ];
  public lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: false,
      },
    },
  };

  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //   },
  // ];

  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() {}

  ngOnInit(): void {}
}

import { Subscription, Observable, of } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
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
  showLegend: boolean = true;
  // chartSize = {
  //   width: 400,
  //   height: 200,
  // };

  // HostListener ref: https://stackoverflow.com/questions/35527456/angular-window-resize-event
  // Official doc: https://angular.io/api/core/HostListener

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    // console.log(event.srcElement.innerWidth);
    if (
      (window.innerWidth <= 1200 && window.innerWidth >= 992) ||
      (window.innerWidth <= 670 && window.innerWidth >= 576)
    ) {
      // console.log(false);
      this.options = {
        title: {
          text: this.chartTitle,
          display: false,
        },
        legend: {
          position: 'right',
          display: false,
        },
      };
    } else {
      // console.log(true);
      this.options = {
        title: {
          text: this.chartTitle,
          display: false,
        },
        legend: {
          position: 'right',
          display: true,
        },
      };
    }
  }

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

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // set up options
    this.options = {
      title: {
        text: this.chartTitle,
        display: false,
      },
      legend: {
        position: 'right',
        display: this.showLegend,
      },
    };
  }
}

// Angular Chart.js integration tutorial: https://www.positronx.io/angular-chart-js-tutorial-with-ng2-charts-examples/

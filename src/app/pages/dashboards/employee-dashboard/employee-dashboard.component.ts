import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActionItemService } from './../../../services/action-item.service';
import { ActionItem } from './../../action-items/action-item.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  // CHART DATA
  chartLabels: Label[] = ['assigned', 'in-progress', 'completed'];
  chartType: ChartType = 'doughnut';

  // Action items due within 7 days chart
  weekChartData: SingleDataSet = [0, 0, 0];
  // Action due today chart
  todayChartData: SingleDataSet = [0, 0, 0];

  actionItemsDueWeek: ActionItem[];
  actionItemsDueToday: ActionItem[];

  // due date
  private today = moment().startOf('day');
  private yesterday = moment().subtract(1, 'days');
  private inAWeek = moment().add(7, 'days').startOf('day');
  private inFourDays = moment().add(4, 'days').startOf('day');

  // TABLE DATA
  displayedColumns: string[] = ['action-title', 'due', 'priority', 'status'];
  // overdue table
  @ViewChild('overduePaginator') overduePaginator: MatPaginator;
  actionItemsOverdue: ActionItem[];
  overdueDS = new MatTableDataSource<ActionItem>();
  // upcoming deadline table
  @ViewChild('upcomingPaginator') upcomingPaginator: MatPaginator;
  actionItemsUpcomingDeadline: ActionItem[];
  upcomingDeadlineDS = new MatTableDataSource<ActionItem>();

  constructor(private actionItemService: ActionItemService) {}

  ngOnInit(): void {
    this.actionItemService.getActionItems().subscribe((data: ActionItem[]) => {
      this.filterActionItemWithinWeek(data);
      this.filterActionItemDueToday(data);
      this.filterActionItemOverdue(data);
      this.filterActionItemUpcomingDeadline(data);

      this.weekChartData = this.calculateStatusChartData(
        this.actionItemsDueWeek
      );
      this.todayChartData = this.calculateStatusChartData(
        this.actionItemsDueToday
      );
    });
  }

  // FUNCTIONS FOR CHARTS
  // filter due within a week
  filterActionItemWithinWeek = (data: ActionItem[]) => {
    this.actionItemsDueWeek = data.filter((actionItem) => {
      return (
        actionItem.assignedTo === 'Amber Lee' &&
        moment(actionItem.due).isBetween(this.today, this.inAWeek, 'day')
      );
    });
  };

  // filter due within a day
  filterActionItemDueToday = (data: ActionItem[]) => {
    this.actionItemsDueToday = data.filter((actionItem) => {
      return moment(actionItem.due).isSame(this.today, 'day');
    });
  };

  // calculate chart data
  calculateStatusChartData = (actionItems: ActionItem[]): number[] => {
    const itemCount = actionItems.length;
    let assigned: number = 0;
    let inProgress: number = 0;
    let completed: number = 0;

    actionItems.forEach((actionItem) => {
      if (actionItem.status == 'assigned') {
        ++assigned;
      }
      if (actionItem.status == 'in-progress') {
        ++inProgress;
      }
      if (actionItem.status == 'completed') {
        ++completed;
      }
    });
    return [
      (assigned / itemCount) * 100,
      (inProgress / itemCount) * 100,
      (completed / itemCount) * 100,
    ];
  };

  // FUNCTIONS FOR TABLES
  // filter overdue items
  filterActionItemOverdue = (data: ActionItem[]) => {
    this.actionItemsOverdue = data.filter((actionItem) => {
      return (
        actionItem.assignedTo === 'Amber Lee' &&
        moment(actionItem.due).isBefore(this.today, 'day') &&
        actionItem.status != 'completed'
      );
    });
    this.setDataSource(this.actionItemsOverdue, this.overdueDS);
    this.setPaginator(this.overdueDS, this.overduePaginator);
  };

  // filter approaching deadline items
  filterActionItemUpcomingDeadline = (data: ActionItem[]) => {
    this.actionItemsUpcomingDeadline = data.filter((actionItem) => {
      return (
        actionItem.assignedTo === 'Amber Lee' &&
        moment(actionItem.due).isBetween(
          this.yesterday,
          this.inFourDays,
          'day'
        ) &&
        actionItem.status != 'completed'
      );
    });
    this.setDataSource(
      this.actionItemsUpcomingDeadline,
      this.upcomingDeadlineDS
    );
    this.setPaginator(this.upcomingDeadlineDS, this.upcomingPaginator);
    console.log(this.upcomingDeadlineDS);
  };

  // set array to data source
  setDataSource = (
    actionItems: ActionItem[],
    dataSource: MatTableDataSource<ActionItem>
  ) => {
    dataSource.data = actionItems;
  };

  //set paginator
  setPaginator = (
    dataSource: MatTableDataSource<ActionItem>,
    paginator: MatPaginator
  ) => {
    dataSource.paginator = paginator;
  };

  // date format
  getDateFormat(date): string {
    return moment(date).format('MMM DD, YYYY');
  }
}

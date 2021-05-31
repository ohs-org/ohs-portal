import { Component, OnInit } from '@angular/core';
import { ActionItemService } from './../../../services/action-item.service';
import { ActionItem } from './../../../models/action-item.model';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss'],
})
export class EmployerDashboardComponent implements OnInit {
  // User Info
  user: any = {
    first_name: 'Craig',
    last_name: 'MacLean',
  };
  userName: string = 'Craig MacLean';

  // DOUGHNUT CHART DATA
  doughnutChartLabels: Label[] = ['assigned', 'in-progress', 'completed'];
  doughnutChartType: ChartType = 'doughnut';

  // Action items due within 7 days chart
  weekChartData: SingleDataSet = [0, 0, 0];
  // Action due today chart
  todayChartData: SingleDataSet = [0, 0, 0];

  actionItemsDueWeek: ActionItem[] = [];
  actionItemsDueToday: ActionItem[] = [];

  // Due dates
  private today = moment().startOf('day');
  private yesterday = moment().subtract(1, 'days');
  private inAWeek = moment().add(7, 'days').startOf('day');
  private inFourDays = moment().add(4, 'days').startOf('day');

  constructor(private actionItemService: ActionItemService) {}

  ngOnInit(): void {
    this.actionItemService.getActionItems().subscribe((data: ActionItem[]) => {
      // chart items
      this.filterActionItemWithinWeek(data);
      this.filterActionItemDueToday(data);
      // table items
      // this.filterActionItemOverdue(data);
      // this.filterActionItemUpcomingDeadline(data);

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
        actionItem.assignedTo === this.userName &&
        moment(actionItem.due).isBetween(this.yesterday, this.inAWeek, 'day')
      );
    });
  };

  // filter due within a day
  filterActionItemDueToday = (data: ActionItem[]) => {
    this.actionItemsDueToday = data.filter((actionItem) => {
      return (
        actionItem.assignedTo === this.userName &&
        moment(actionItem.due).isSame(this.today, 'day')
      );
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
}

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DropDownOption } from './../../../models/dropdown-option.model';
import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
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
export class EmployerDashboardComponent implements OnInit, AfterViewInit {
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

  // PROGRESS PANEL
  workInjuryReportSteps: string[] = [
    'Incident Report',
    'Incident Investigation',
    'Investigation Report Review',
    'Claimed ',
  ];
  workBCClaimSteps: string[] = [
    'Claim Report Submitted',
    'Incident Investigation',
    'Approved ',
  ];

  reportsList: DropDownOption[] = [
    { value: '0', viewValue: 'Report Name 1' },
    { value: '1', viewValue: 'Report Name 2' },
    { value: '2', viewValue: 'Report Name 3' },
    { value: '3', viewValue: 'Report Name 4' },
  ];

  workBCClaimList: DropDownOption[] = [
    { value: '0', viewValue: 'Work BC Claim 1' },
    { value: '1', viewValue: 'Work BC Claim 2' },
    { value: '2', viewValue: 'Work BC Claim 3' },
    { value: '1', viewValue: 'Work BC Claim 4' },
  ];

  // TABLE DATA
  myDisplayedColumns: string[] = ['action-title', 'due', 'priority', 'status'];
  displayedColumns: string[] = [
    'action-title',
    'due',
    'priority',
    'assigned-to',
    'status',
  ];

  // overdue table
  // ** paginator was undefined when try to get with ViewChild because ngIf mess things up
  // ** in this case, use ViewChildren
  @ViewChildren('myOverduePaginator')
  myOverduePaginator: QueryList<MatPaginator>;
  myActionItemsOverdue: ActionItem[];
  myOverdueDS = new MatTableDataSource<ActionItem>();
  // upcoming deadline table
  @ViewChildren('myUpcomingPaginator')
  myUpcomingPaginator: QueryList<MatPaginator>;
  myActionItemsUpcomingDeadline: ActionItem[];
  myUpcomingDeadlineDS = new MatTableDataSource<ActionItem>();

  @ViewChildren('overduePaginator') overduePaginator: QueryList<MatPaginator>;
  actionItemsOverdue: ActionItem[];
  overdueDS = new MatTableDataSource<ActionItem>();
  // upcoming deadline table
  @ViewChildren('upcomingPaginator') upcomingPaginator: QueryList<MatPaginator>;
  actionItemsUpcomingDeadline: ActionItem[];
  upcomingDeadlineDS = new MatTableDataSource<ActionItem>();

  constructor(private actionItemService: ActionItemService) {}

  ngOnInit(): void {
    this.actionItemService.getActionItems().subscribe((data: ActionItem[]) => {
      // chart items
      this.filterActionItemWithinWeek(data);
      this.filterActionItemDueToday(data);
      // table items
      this.filterMyActionItemOverdue(data);
      this.filterMyActionItemUpcomingDeadline(data);
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

  ngAfterViewInit(): void {
    this.myOverduePaginator.changes.subscribe(
      (paginator: QueryList<MatPaginator>) => {
        this.setPaginator(this.myOverdueDS, paginator.first);
      }
    );
    this.myUpcomingPaginator.changes.subscribe(
      (paginator: QueryList<MatPaginator>) => {
        this.setPaginator(this.myUpcomingDeadlineDS, paginator.first);
      }
    );

    this.overduePaginator.changes.subscribe(
      (paginator: QueryList<MatPaginator>) => {
        this.setPaginator(this.overdueDS, paginator.first);
      }
    );
    this.upcomingPaginator.changes.subscribe(
      (paginator: QueryList<MatPaginator>) => {
        this.setPaginator(this.upcomingDeadlineDS, paginator.first);
      }
    );
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

  // FUNCTIONS FOR TABLES
  // filter overdue items
  filterMyActionItemOverdue = (data: ActionItem[]) => {
    this.myActionItemsOverdue = data.filter((actionItem) => {
      return (
        actionItem.assignedTo ===
          `${this.user.first_name} ${this.user.last_name}` &&
        moment(actionItem.due).isBefore(this.today, 'day') &&
        actionItem.status != 'completed'
      );
    });
    this.setDataSource(this.myActionItemsOverdue, this.myOverdueDS);
  };

  filterActionItemOverdue = (data: ActionItem[]) => {
    this.actionItemsOverdue = data.filter((actionItem) => {
      return (
        moment(actionItem.due).isBefore(this.today, 'day') &&
        actionItem.status != 'completed'
      );
    });
    this.setDataSource(this.actionItemsOverdue, this.overdueDS);
  };

  // filter approaching deadline items
  filterMyActionItemUpcomingDeadline = (data: ActionItem[]) => {
    this.myActionItemsUpcomingDeadline = data.filter((actionItem) => {
      return (
        actionItem.assignedTo ===
          `${this.user.first_name} ${this.user.last_name}` &&
        moment(actionItem.due).isBetween(
          this.yesterday,
          this.inFourDays,
          'day'
        ) &&
        actionItem.status != 'completed'
      );
    });
    this.setDataSource(
      this.myActionItemsUpcomingDeadline,
      this.myUpcomingDeadlineDS
    );
  };

  filterActionItemUpcomingDeadline = (data: ActionItem[]) => {
    this.actionItemsUpcomingDeadline = data.filter((actionItem) => {
      return (
        moment(actionItem.due).isBetween(
          this.yesterday,
          this.inFourDays,
          'day'
        ) && actionItem.status != 'completed'
      );
    });
    this.setDataSource(
      this.actionItemsUpcomingDeadline,
      this.upcomingDeadlineDS
    );
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

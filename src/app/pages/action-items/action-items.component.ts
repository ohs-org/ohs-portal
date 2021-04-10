import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActionItemEditComponent } from './action-item-edit/action-item-edit.component';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActionItem } from './action-item.model';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { from } from 'rxjs';

const ACTION_DATA: ActionItem[] = [
  {
    actionItemId: 'cdcf0775-98cb-4c41-9308-8b22fd4a9e32',
    actionItemTitle: 'Jerusalem',
    created: '2020-08-21 11:28:14',
    due: '2021-04-15 12:38:11',
    priority: 'medium',
    meetings: '2020-05-25 13:11:18',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    assignedTo: 'Ami Childes',
    color: '#274725',
    status: 'assigned',
  },
];

@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.scss'],
})
export class ActionItemsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('completedPaginator') completedPaginator: MatPaginator;
  @ViewChild('assignedToMePaginator') assignedToMePaginator: MatPaginator;
  @ViewChild('assignedToOthersPaginator')
  assignedToOthersPaginator: MatPaginator;
  @ViewChild('longRunningPaginator') longRunningPaginator: MatPaginator;

  displayedColumns: string[] = [
    'action-title',
    'assignee',
    'created',
    'due',
    'priority',
    'status',
  ];

  actionItems: ActionItem[] = [];
  dataSource = new MatTableDataSource<ActionItem>();

  // table datasource
  assignedToMeAI = new MatTableDataSource<ActionItem>();
  assignedToOthersAI = new MatTableDataSource<ActionItem>();
  completedAI = new MatTableDataSource<ActionItem>();
  longRunningAI = new MatTableDataSource<ActionItem>();

  // filter values obj for filters taking more than one value
  assignedToMeFilterValues: any = {
    assignedTo: 'Amber Lee',
    searchFilter: '',
  };

  assignedToOthersFilterValues: any = {
    assignedTo: 'Amber Lee',
    searchFilter: '',
  };

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchActionItems();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.completedAI.paginator = this.completedPaginator;
    this.assignedToMeAI.paginator = this.assignedToMePaginator;
    this.assignedToOthersAI.paginator = this.assignedToOthersPaginator;
    this.longRunningAI.paginator = this.longRunningPaginator;
  }

  private fetchActionItems() {
    this.http
      .get('../../../assets/temp-data/action-items.json')
      .subscribe((items) => {
        this.dataSource.data = Object.values(items);

        this.assignedToMeAI.data = this.dataSource.data;
        this.assignedToMeAI.filterPredicate = this.createAssignToMeFilter();
        this.assignedToMeAI.filter = JSON.stringify(
          this.assignedToMeFilterValues
        );

        this.assignedToOthersAI.data = this.dataSource.data;
        this.assignedToOthersAI.filterPredicate = this.createAssignToOthersFilter();
        this.assignedToOthersAI.filter = JSON.stringify(
          this.assignedToOthersFilterValues
        );

        this.longRunningAI.data = this.dataSource.data;
        this.longRunningAI.filterPredicate = this.createLongRunningFilter();
        this.longRunningAI.filter = ' ';

        this.completedAI.data = this.dataSource.data;
        this.completedAI.filterPredicate = this.createCompletedFilter();
        this.completedAI.filter = ' ';
      });
  }

  private createAssignToMeFilter(): (
    actionItem: ActionItem,
    filter: string
  ) => boolean {
    let filterFunction = function (actionItem, filter): boolean {
      const filterObj = JSON.parse(filter);
      if (filterObj.searchFilter) {
        return (
          actionItem.assignedTo == filterObj.assignedTo &&
          JSON.stringify(actionItem)
            .trim()
            .toLowerCase()
            .includes(filterObj.searchFilter)
        );
      }
      return actionItem.assignedTo == filterObj.assignedTo;
    };
    return filterFunction;
  }

  private createAssignToOthersFilter(): (
    actionItem: ActionItem,
    filter: string
  ) => boolean {
    let filterFunction = function (actionItem, filter): boolean {
      const filterObj = JSON.parse(filter);
      if (filterObj.searchFilter) {
        return (
          actionItem.assignedTo != filterObj.assignedTo &&
          JSON.stringify(actionItem)
            .trim()
            .toLowerCase()
            .includes(filterObj.searchFilter)
        );
      }
      return actionItem.assignedTo != filterObj.assignedTo;
    };
    return filterFunction;
  }

  private createLongRunningFilter(): (
    actionItem: ActionItem,
    filter: string
  ) => boolean {
    let filterFunction = function (actionItem, filter): boolean {
      // if the action item last more than 8 month
      let difference = moment(actionItem.due).diff(
        moment(actionItem.created),
        'months',
        true
      );

      if (filter == ' ') {
        return difference > 8;
      }
      return (
        difference > 8 &&
        JSON.stringify(actionItem).trim().toLowerCase().includes(filter)
      );
    };
    return filterFunction;
  }

  private createCompletedFilter(): (
    actionItem: ActionItem,
    filter: string
  ) => boolean {
    let filterFunction = function (actionItem, filter): boolean {
      if (filter == ' ') {
        return actionItem.status == 'completed';
      }
      return (
        actionItem.status == 'completed' &&
        JSON.stringify(actionItem).trim().toLowerCase().includes(filter)
      );
    };
    return filterFunction;
  }

  applyFilter(filterValue: string) {
    this.assignedToMeFilterValues.searchFilter = filterValue;
    this.assignedToMeAI.filter = JSON.stringify(this.assignedToMeFilterValues);

    this.assignedToOthersFilterValues.searchFilter = filterValue;
    this.assignedToOthersAI.filter = JSON.stringify(
      this.assignedToOthersFilterValues
    );
    this.longRunningAI.filter = filterValue.trim().toLowerCase();
    this.completedAI.filter = filterValue.trim().toLowerCase();
  }

  handleStatusUpdate(updatedStatus, actionElement) {
    console.log(updatedStatus);
    console.log(actionElement);
    const foundIndex = this.dataSource.data.findIndex(
      (action) => action.actionItemId == actionElement.actionItemId
    );
    this.dataSource.data[foundIndex] = {
      ...actionElement,
      status: updatedStatus,
    };

    console.log('after status update');
    console.log(this.dataSource.data[foundIndex]);

    this.dataSource._updateChangeSubscription();
    this.completedAI._updateChangeSubscription();
    this.assignedToMeAI._updateChangeSubscription();
    this.assignedToOthersAI._updateChangeSubscription();
    this.longRunningAI._updateChangeSubscription();

    // http request to update the status
  }

  removeAssignee(actionElement) {
    // create custom datasource - for sorting...
    const foundIndex = this.dataSource.data.findIndex(
      (action) => action.actionItemId == actionElement.actionItemId
    );

    this.dataSource.data[foundIndex] = {
      ...actionElement,
      assignedTo: '',
    };

    this.dataSource._updateChangeSubscription();
    this.completedAI._updateChangeSubscription();
    this.assignedToMeAI._updateChangeSubscription();
    this.assignedToOthersAI._updateChangeSubscription();
    this.longRunningAI._updateChangeSubscription();
    // http request to update the assignee
  }

  openEditDialog(actionElement): void {
    const dialogRef = this.dialog.open(ActionItemEditComponent, {
      width: '380px',
      data: actionElement,
    });

    dialogRef.afterClosed().subscribe((result) => {
      const foundIndex = this.dataSource.data.findIndex(
        (action) => action.actionItemId == result.actionItemId
      );
      this.dataSource.data[foundIndex] = result;
      this.dataSource._updateChangeSubscription();
      this.completedAI._updateChangeSubscription();
      this.assignedToMeAI._updateChangeSubscription();
      this.assignedToOthersAI._updateChangeSubscription();
      this.longRunningAI._updateChangeSubscription();
    });
  }

  getDateFormat(date): string {
    return moment(date).format('MMM DD, YYYY');
  }
}

// custom dataSource ref: https://stackoverflow.com/questions/57055587/set-custom-data-source-for-angular-material-table-in-angular-7
// example: https://blog.angular-university.io/angular-material-data-table/
// filter data by each column: https://sevriukovmk.medium.com/angular-mat-table-filter-2ead680c57bb
// custom filter by each column: https://careydevelopment.us/blog/how-to-filter-on-specific-columns-with-filterpredicate-in-an-angular-material-table

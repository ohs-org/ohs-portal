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

  displayedColumns: string[] = [
    'action-title',
    'assignee',
    'created',
    'due',
    'priority',
    'status',
  ];
  dataSource = new MatTableDataSource<ActionItem>();
  tempDataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchActionItems();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  fetchActionItems() {
    this.http
      .get('../../../assets/temp-data/action-items.json')
      .subscribe((items) => {
        this.dataSource.data = Object.values(items);
        this.tempDataSource = Object.values(items);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
      this.table.renderRows();
      console.log(this.dataSource.data[foundIndex]);
      this.dataSource._updateChangeSubscription();
    });
  }
}

// custom dataSource ref: https://stackoverflow.com/questions/57055587/set-custom-data-source-for-angular-material-table-in-angular-7
// example: https://blog.angular-university.io/angular-material-data-table/

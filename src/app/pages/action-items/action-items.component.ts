import { ActionItemEditComponent } from './action-item-edit/action-item-edit.component';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActionItem } from './action-item.model';
import { MatDialog } from '@angular/material/dialog';

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
  displayedColumns: string[] = [
    'action-title',
    'assignee',
    'created',
    'due',
    'priority',
    'status',
  ];
  dataSource = new MatTableDataSource<ActionItem>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchActionItems();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  fetchActionItems() {
    this.http
      .get('../../../assets/temp-data/action-items.json')
      .subscribe((items) => {
        this.dataSource.data = Object.values(items);
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
    const foundIndex = this.dataSource.data.findIndex(
      (action) => action.actionItemId == actionElement.actionItemId
    );

    const dataCopy = this.dataSource.data;
    dataCopy[foundIndex] = {
      ...actionElement,
      assignedTo: '',
    };

    this.dataSource.data = dataCopy;
    // http request to update the assignedTo
  }

  openEditDialog(actionElement): void {
    const dialogRef = this.dialog.open(ActionItemEditComponent, {
      width: '380px',
      data: actionElement,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog closed and result below');
      console.log(result);
    });
  }
}
//angular material table add buttons to the row: https://www.freakyjolly.com/angular-material-table-operations-using-dialog/#Update_HTML_Template
// https://therichpost.com/angular-material-data-table-with-custom-button-click-event-functionality/

// actionItemId: "2ba4d1f6-651a-4794-a0b5-10431d0d68ef"
// actionItemTitle: "Highlander"
// assignedTo: "Lauree Baccas"
// color: "#2f7ce8"
// created: "2021-01-11 04:35:58"
// description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
// due: "2020-09-13 12:26:54"
// meetings: "2020-06-19 17:39:21"
// priority: "high"
// status: "assigned"

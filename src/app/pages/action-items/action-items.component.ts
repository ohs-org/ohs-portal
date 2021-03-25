import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActionItem } from './action-item.model';

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

  constructor(private http: HttpClient) {}

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
}
//angular material table add buttons to the row: https://www.freakyjolly.com/angular-material-table-operations-using-dialog/#Update_HTML_Template
// https://therichpost.com/angular-material-data-table-with-custom-button-click-event-functionality/

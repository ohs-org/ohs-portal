import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
//label customization example: https://stackblitz.com/edit/angular-w2yhfu?file=src%2Fapp%2Fapp.component.ts
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Jump to';
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
}

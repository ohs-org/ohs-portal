import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements OnInit {
  navList = {};
  sections = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchNavList('manager');
  }

  //get the navigation list
  fetchNavList(role: string) {
    //send http request
    this.http
      .get('../../../assets/temp-data/nav-list.json')
      .subscribe((lists) => {
        //filter the list depends on the users role
        this.navList = Object.values(lists).filter((list) => {
          return list.position === role;
        });
        this.sections = this.navList[0].sections;
        console.log(this.navList);
        console.log(this.sections);
      });
  }
}

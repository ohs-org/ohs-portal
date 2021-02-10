import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements OnInit {
  // Getting nav-list and specific sections
  navList = {};
  sections = [];

  // Screen size related
  watcher: Subscription; // Subscription of the observer of the screen size
  activeMediaQuery: string; // The active media query (xs | sm | md | lg | xl)
  smallScreen: boolean = false;

  constructor(private http: HttpClient, private mediaObserver: MediaObserver) {
    this.onViewPointChanges();
  }

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
      });
  }

  // subscribe to screen size ref: https://stackoverflow.com/questions/46816477/change-how-content-is-displayed-based-on-screen-size-in-angular-4
  // MediaObserver doc: https://github.com/angular/flex-layout/wiki/MediaObserver
  // flex-layout breakpoints: https://github.com/angular/flex-layout/wiki
  onViewPointChanges() {
    this.watcher = this.mediaObserver
      .asObservable()
      .subscribe((changes: MediaChange[]) => {
        const change = changes[0];
        this.activeMediaQuery = change
          ? `'${change.mqAlias}' = (${change.mediaQuery})`
          : '';
        if (change.mqAlias == 'sm' || change.mqAlias == 'xs') {
          this.smallScreen = true;
        } else {
          this.smallScreen = false;
        }
      });
  }
}

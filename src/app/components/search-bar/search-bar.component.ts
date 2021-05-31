import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() keyUpEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onKeyUp(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.keyUpEvent.emit(filterValue);
  }
}

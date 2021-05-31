import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActionItemService {
  private URL = '../../assets/temp-data/action-items.json';
  constructor(private httpClient: HttpClient) {}

  public getActionItems() {
    return this.httpClient.get(this.URL);
  }
}

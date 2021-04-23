import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  private URL = '../../assets/temp-data/meetings.json';
  constructor(private httpClient: HttpClient) {}

  public getMeetings() {
    return this.httpClient.get(this.URL);
  }
}

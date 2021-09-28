import { TestedHCW } from './../components/basic-table/basic-table.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestedHcwService {
  constructor(private http: HttpClient) {}

  getTestedHCW = () => {
    return this.http
      .get<any>('assets/temp-data/tested-hcw.json')
      .toPromise()
      .then((res) => <TestedHCW[]>res.data)
      .then((data) => {
        return data;
      });
  };
}

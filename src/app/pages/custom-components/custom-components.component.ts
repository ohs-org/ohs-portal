import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-components',
  templateUrl: './custom-components.component.html',
  styleUrls: ['./custom-components.component.scss'],
})
export class CustomComponentsComponent implements OnInit {
  termsOfRef = {
    title: 'Terms of Reference',
    fieldUIPortion: 11,
    sections: [
      {
        sectionName: 'Quroum',
        fields: [
          { fieldName: 'Minimum # of attendees', value: '4' },
          { fieldName: 'Minimum # of employers', value: '2' },
          { fieldName: 'Minimum # of employees', value: '3' },
        ],
      },
      {
        sectionName: 'Representation structure',
        fields: [
          { fieldName: 'Fraser Health Authority', value: '4' },
          { fieldName: 'Hospital Employees’ Union', value: '2' },
          { fieldName: 'BC Nurses’ Union', value: '3' },
          {
            fieldName: 'BC Government and Service Employees’ Union',
            value: '3',
          },
        ],
      },
      {
        sectionName: '',
        fields: [
          { fieldName: 'Minimum # of attendees', value: '4' },
          { fieldName: 'Minimum # of employers', value: '2' },
          { fieldName: 'Minimum # of employees', value: '3' },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}

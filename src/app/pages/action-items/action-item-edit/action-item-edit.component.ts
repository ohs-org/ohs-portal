import { ActionItem } from './../action-item.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
@Component({
  selector: 'app-action-item-edit',
  templateUrl: './action-item-edit.component.html',
  styleUrls: ['./action-item-edit.component.scss'],
})
export class ActionItemEditComponent implements OnInit {
  // receive input action item object
  actionItem = {
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
  };

  statusOptions = [
    { value: 'created', viewValue: 'created' },
    { value: 'assigned', viewValue: 'assigned' },
    { value: 'in-progress', viewValue: 'in-progress' },
    { value: 'completed', viewValue: 'completed' },
  ];

  priorityOptions = [
    { value: 'high', viewValue: 'high' },
    { value: 'medium', viewValue: 'medium' },
    { value: 'low', viewValue: 'low' },
  ];

  siteOptions = [
    { value: 'fm-1', viewValue: 'Fraser 1 conference / Meeting Room' },
    { value: 'fm-2', viewValue: 'Fraser 2 conference / Meeting Room' },
    { value: 'fm-3', viewValue: 'Fraser 3 conference / Meeting Room' },
    { value: 'fm-4', viewValue: 'Fraser 4 conference / Meeting Room' },
    { value: 'fm-5', viewValue: 'Fraser 5 conference / Meeting Room' },
    { value: 'fm-6', viewValue: 'Fraser 6 conference / Meeting Room' },
  ];

  editFormGroup: FormGroup;

  // for date string format
  dateCreated: string;
  dateMeetings: string;

  constructor(
    private FormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ActionItemEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActionItem
  ) {}

  ngOnInit(): void {
    this.createFormGroup();
    this.dateCreated = moment(this.data.created).format('MMM DD, YYYY, h:mma');
    this.dateMeetings = moment(this.data.meetings).format(
      'MMM DD, YYYY, h:mma'
    );
    console.log('inside of data');

    console.log(this.data);
  }

  createFormGroup() {
    this.editFormGroup = this.FormBuilder.group({
      statusCtrl: [this.data.status, Validators.required],
      priorityCtrl: [this.data.priority, Validators.required],
      descCtrl: [this.data.description],
      siteCtrl: [],
      assignToCtrl: [this.data.assignedTo],
      dueDateCtrl: [this.data.due, Validators.required],
    });
  }

  onEditFormSubmit() {
    console.log('edit submitted');
    console.log(this.editFormGroup);
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}

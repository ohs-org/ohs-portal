import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Component({
  selector: 'app-dialogue-modal',
  templateUrl: './dialogue-modal.component.html',
  styleUrls: ['./dialogue-modal.component.scss'],
})
export class DialogueModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  dialogConfig: MatDialogConfig = {
    panelClass: 'responsive-dialog', // global style class
  };

  openDialog() {
    this.dialog.open(ExampleDialogComponent, this.dialogConfig);
  }

  openErrorDialog() {
    this.dialog.open(ErrorDialogComponent, this.dialogConfig);
  }
}

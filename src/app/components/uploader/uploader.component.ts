import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// Drag and drop file uploader ref
// Article: https://medium.com/@tarekabdelkhalek/how-to-create-a-drag-and-drop-file-uploading-in-angular-78d9eba0b854
// Stackblitz: https://stackblitz.com/edit/angular-drag-n-drop-directive?file=angular.json

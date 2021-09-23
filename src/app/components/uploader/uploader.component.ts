import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  files: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  // on file drop handler
  onFileDropped = ($event) => {
    this.prepareFilesList($event);
  };

  // handle file from browsing
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  // delete file from files list
  // @param index (File index)
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  // add progress field in dropped file object
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  // simulate the upload process
  private uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 25);
      }
    }, 1000);
  }

  // format bytes
  // @param bytes (File size in bytes)
  // @param decimals (Decimals point)
  formatBytes(bytes, decimals) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}

// Drag and drop file uploader ref
// Article: https://medium.com/@tarekabdelkhalek/how-to-create-a-drag-and-drop-file-uploading-in-angular-78d9eba0b854
// Stackblitz: https://stackblitz.com/edit/angular-drag-n-drop-directive?file=angular.json

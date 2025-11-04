import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [NgIf, NgFor],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css',
})
export class FileUpload {
  @Input({ required: true }) label!: string;
  @Input({transform: (val: string) => val.split(',')}) accept: string[] = [];
  @Output() selected = new EventEmitter<FileList>();
  errorMessage = '';

  /* get acceptArray() {
    return this.accept.split(',');
  } */

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.errorMessage = Array.from(files).every((f) => this.accept.includes(f.type))
      ? ''
      : 'Invalid file type';

    if (this.errorMessage === '') {
      this.selected.emit(files);
    }
  }
}

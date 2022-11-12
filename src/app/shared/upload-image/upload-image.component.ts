import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Input() public referencesformControl?: AbstractControl;
  @Input() public placeholderImage?: string;
  @Input() public containerCSS: string = '';
  @Input() public classImagePreviewCSS: string = '';
  @Output() public updateImage: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public changeImage(event: any): void {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.placeholderImage = fileReader.result as string
        this.referencesformControl?.setValue(file);
        this.referencesformControl?.markAsDirty();
        this.updateImage.emit(this.placeholderImage)

      }
    }
  }

}

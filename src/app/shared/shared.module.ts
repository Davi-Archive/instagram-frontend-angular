import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImageComponent } from './upload-image/upload-image.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent
  ]
})
export class SharedModule { }

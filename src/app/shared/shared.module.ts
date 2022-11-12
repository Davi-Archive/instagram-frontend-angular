import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PublicInputComponent } from './public/public-input/public-input.component';
import { FormsModule } from '@angular/forms';
import { PublicPageComponent } from './public/public-page/public-page.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    PublicInputComponent,
    PublicPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    PublicInputComponent,
    PublicPageComponent
  ]
})
export class SharedModule { }

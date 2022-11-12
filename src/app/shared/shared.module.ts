import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PublicInputComponent } from './public/public-input/public-input.component';
import { FormsModule } from '@angular/forms';
import { PublicPageComponent } from './public/public-page/public-page.component';
import { FooterPublicPageComponent } from './public/footer-public-page/footer-public-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    PublicInputComponent,
    PublicPageComponent,
    FooterPublicPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    ],
  exports: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    PublicInputComponent,
    PublicPageComponent,
    FooterPublicPageComponent
  ]
})
export class SharedModule { }

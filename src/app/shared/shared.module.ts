import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PublicInputComponent } from './public/public-input/public-input.component';
import { FormsModule } from '@angular/forms';
import { PublicPageComponent } from './public/public-page/public-page.component';
import { FooterPublicPageComponent } from './public/footer-public-page/footer-public-page.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from '../register/register.component';
import { InstagramApiInterceptor } from './services/instagram-api-interceptor.service';


@NgModule({
  providers: [
    {
      provide: 'INSTAGRAM_URL_API',
      useValue: environment.instagramUrlApi
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InstagramApiInterceptor,
      multi: true
    }
  ],
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
    RouterModule,
    HttpClientModule
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

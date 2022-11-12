import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    AvatarComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../shared/components/layout/layout.module';
import { CabecalhoPerfilComponent } from './cabecalho-perfil/cabecalho-perfil.component';


@NgModule({
  declarations: [
    ProfileComponent,
    CabecalhoPerfilComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class ProfileModule { }

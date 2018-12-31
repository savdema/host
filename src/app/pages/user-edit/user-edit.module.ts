import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit.component';
import { UserEditRoutingModule } from './user-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UserEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UserEditComponent
  ]
})
export class UserEditModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class AuthModule { }

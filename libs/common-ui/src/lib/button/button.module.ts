import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "@front-web/common-ui";



@NgModule({
  declarations: [ButtonComponent],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ButtonModule { }

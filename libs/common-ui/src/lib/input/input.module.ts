import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from "@front-web/common-ui";


@NgModule({
  declarations: [InputComponent,],
  exports: [InputComponent,],
  imports: [
    CommonModule
  ]
})
export class InputModule {
}

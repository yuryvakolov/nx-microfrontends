import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonUiModule} from "@front-web/common-ui";
import {ButtonModule} from 'libs/common-ui/src/lib/button/button.module';
import {InputModule} from 'libs/common-ui/src/lib/input/input.module';
import {AppRoutingModule} from "./app.routing.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    AppRoutingModule,
    ButtonModule,
    InputModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

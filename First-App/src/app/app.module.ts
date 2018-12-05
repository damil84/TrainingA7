import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {WarningAlertComponent} from './warningalert/warningalert.component';
import {SuccessAlertComponent} from './successalert/successAlert.component';
import {OneComponent} from './training/one/one.component'
import {TwoComponent} from "./training/two/two.component";
import {ThreeComponent} from "./training/three/three.component"; [ThreeComponent]


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent,
    OneComponent, TwoComponent, ThreeComponent]
})
export class AppModule {
}

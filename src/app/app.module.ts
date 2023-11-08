import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {OverviewComponent} from './overview/overview.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {CreateComponent} from './create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    MatGridListModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AlgoritimosModule } from './algoritimos/algoritimos.module';
import { AlgoritimoService } from './algoritimos/algoritimo.service';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AlgoritimosModule
  ],
  providers: [AlgoritimoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

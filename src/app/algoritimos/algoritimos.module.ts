import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlgoritimosComponent } from './algoritimos.component';
import { AlgoritimoService } from './algoritimo.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    InputTextareaModule,
    CardModule
  ],
  declarations: [AlgoritimosComponent],
  exports: [AlgoritimosComponent],
  providers: [AlgoritimoService],
})
export class AlgoritimosModule { }

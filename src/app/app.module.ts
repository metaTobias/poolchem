import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from "primeng/dropdown";
import { CascadeSelectModule } from 'primeng/cascadeselect';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        DropdownModule,
        CascadeSelectModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

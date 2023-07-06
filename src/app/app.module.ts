import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from "primeng/dropdown";
import { CascadeSelectModule } from 'primeng/cascadeselect';
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DropdownModule,
        CascadeSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from "environments/firebase.config";
import { DateFilter } from '../share/pipes/dateFilter.pipe';
import {TheaterDateFilter } from '../share/pipes/dateFilter.pipe';
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  declarations: [ AppComponent, DateFilter, TheaterDateFilter ],
  bootstrap: [ AppComponent ]
})export class AppModule {}
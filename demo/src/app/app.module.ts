import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxFormObjectModule } from 'ngx-form-object';

import { AppComponent } from './app.component';

import { DatastoreService } from 'app/services/datastore/datastore.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxFormObjectModule
  ],
  providers: [
    DatastoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

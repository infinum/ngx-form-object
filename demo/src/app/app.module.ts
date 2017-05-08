import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxFormObjectModule } from 'ngx-form-object';

import { AppComponent } from './app.component';
import AppRoutes from './app.routes';

import { DatastoreService } from 'app/services/datastore/datastore.service';
import { CompanyPageComponent } from './components/company-page/company-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyPageComponent
  ],
  imports: [
    AppRoutes,
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

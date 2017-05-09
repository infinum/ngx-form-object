import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFormObjectModule } from 'ngx-form-object';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { DatastoreService } from 'app/services/datastore/datastore.service';
import { CompanyService } from 'app/services/company/company.service';
import { UserService } from 'app/services/user/user.service';

import { CompanyPageComponent } from './components/company-page/company-page.component';
import { EditUserPageComponent } from './components/edit-user-page/edit-user-page.component';
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyPageComponent,
    EditUserPageComponent,
    NewUserPageComponent,
    UserFormComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgxFormObjectModule
  ],
  providers: [
    DatastoreService,
    CompanyService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

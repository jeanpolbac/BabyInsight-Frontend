import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './authentication/register/register.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { ChildListComponent } from './dashboard/child-list/child-list.component';
import { VaccineListComponent } from './dashboard/vaccine-list/vaccine-list.component';
import { AddChildComponent } from './dashboard/add-child/add-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    ChildListComponent,
    VaccineListComponent,
    AddChildComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

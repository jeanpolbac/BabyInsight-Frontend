import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AddChildComponent } from './dashboard/child/add-child/add-child.component';
import { ViewChildComponent } from './dashboard/child/view-child/view-child.component';
import { ListChildrenComponent } from './dashboard/child/list-children/list-children.component';
import { VaccineListRemainingComponent } from './dashboard/vaccine/vaccine-list-remaining/vaccine-list-remaining.component';
import { VaccineListAdministeredComponent } from './dashboard/vaccine/vaccine-list-administered/vaccine-list-administered.component';
import { VaccineListOverdueComponent } from './dashboard/vaccine/vaccine-list-overdue/vaccine-list-overdue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    AddChildComponent,
    ViewChildComponent,
    ListChildrenComponent,
    VaccineListRemainingComponent,
    VaccineListAdministeredComponent,
    VaccineListOverdueComponent
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

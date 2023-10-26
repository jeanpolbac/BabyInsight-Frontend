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
import { ChildListComponent } from './dashboard/child/view-child/child-list.component';
import { VaccineListComponent } from './dashboard/vaccine/vaccine-list-overdue/vaccine-list.component';
import { AddChildComponent } from './dashboard/child/add-child/add-child.component';
import { ListChildrenComponent } from './dashboard/child/list-children/list-children.component';
import { VaccineListRemainingComponent } from './dashboard/vaccine/vaccine-list-remaining/vaccine-list-remaining.component';
import { VaccineListAdministeredComponent } from './dashboard/vaccine/vaccine-list-administered/vaccine-list-administered.component';
import { ViewChildComponent } from './dashboard/child/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    ChildListComponent,
    VaccineListComponent,
    AddChildComponent,
    ListChildrenComponent,
    VaccineListRemainingComponent,
    VaccineListAdministeredComponent,
    ViewChildComponent
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

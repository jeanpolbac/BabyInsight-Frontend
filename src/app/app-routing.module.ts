import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserDashboardComponent} from "./dashboard/user-dashboard/user-dashboard.component";
import { ViewChildComponent } from './dashboard/child/view-child/view-child.component';
import { AddChildComponent} from "./dashboard/child/add-child/add-child.component";
import { ListChildrenComponent} from "./dashboard/child/list-children/list-children.component";
import { VaccineListComponent } from './dashboard/vaccine/vaccine-list-overdue/vaccine-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'view-child', component: ViewChildComponent},
  { path: 'add-child', component: AddChildComponent},
  { path: 'vaccine-list', component: VaccineListComponent},
  { path: 'list-children', component: ListChildrenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

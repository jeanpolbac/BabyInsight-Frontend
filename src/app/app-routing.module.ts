import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserDashboardComponent} from "./dashboard/user-dashboard/user-dashboard.component";
import { ChildListComponent } from './dashboard/child-list/child-list.component';
import { AddChildComponent} from "./dashboard/add-child/add-child.component";
import { VaccineListComponent } from './dashboard/vaccine-list/vaccine-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'child-list', component: ChildListComponent},
  { path: 'add-child', component: AddChildComponent},
  { path: 'vaccine-list', component: VaccineListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

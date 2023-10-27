import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserDashboardComponent} from "./dashboard/user-dashboard/user-dashboard.component";
import { ViewChildComponent } from './dashboard/child/view-child/view-child.component';
import { AddChildComponent} from "./dashboard/child/add-child/add-child.component";
import { ListChildrenComponent} from "./dashboard/child/list-children/list-children.component";
import { VaccineListRemainingComponent } from './dashboard/vaccine/vaccine-list-remaining/vaccine-list-remaining.component';
import { VaccineListAdministeredComponent} from "./dashboard/vaccine/vaccine-list-administered/vaccine-list-administered.component";
import { VaccineListOverdueComponent} from "./dashboard/vaccine/vaccine-list-overdue/vaccine-list-overdue.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'view-child/:id', component: ViewChildComponent},
  { path: 'add-child', component: AddChildComponent},
  { path: 'list-children', component: ListChildrenComponent},
  { path: 'list-remaining/:id', component: VaccineListRemainingComponent},
  { path: 'list-administered/:id', component: VaccineListAdministeredComponent},
  { path: 'list-overdue/:id', component: VaccineListOverdueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

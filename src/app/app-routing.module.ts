import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenefitListComponent } from './pages/benefit-list/benefit-list.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'benefities', component: BenefitListComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'branches', component: BranchesComponent},
  {path: 'orders', component: OrdersComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashBoardComponent } from './dash-board/dash-board.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full' 
  },
  {
    path: 'dashboard' , 
    component: DashBoardComponent
  },
  {
    path: 'addemployee',
     component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
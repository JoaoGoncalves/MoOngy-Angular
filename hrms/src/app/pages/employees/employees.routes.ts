import { Routes } from "@angular/router";
import { EmployeeList } from "./employee-list/employee-list";
import { EmployeeDetails } from "./employee-details/employee-details";
import { CreateEmployee } from "./create-employee/create-employee";
import { EditEmployee } from "./edit-employee/edit-employee";

export const routes: Routes = [
    {path: 'list', component: EmployeeList},
    {path: 'details/:id', component: EmployeeDetails},
    {path: 'create', component: CreateEmployee},
    {path: 'edit', component: EditEmployee},
]
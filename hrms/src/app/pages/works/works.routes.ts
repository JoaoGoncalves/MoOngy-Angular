import { Routes } from "@angular/router";
import { ProjectList } from "./project-list/project-list";
import { ProjectDetails } from "./project-details/project-details";
import { TimeOffManagement } from "./time-off-management/time-off-management";


export const routes: Routes = [
    {path:'projects', pathMatch: 'full', component: ProjectList},
    {path:'projects/:id',  component: ProjectDetails},
    {path:'time-off',  component: TimeOffManagement},
]
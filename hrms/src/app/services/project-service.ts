import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project } from '../infrastructure/types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  http = inject(HttpClient);

    getProject(id: number) {
        return this.http.get<Project>(`https://my-json-server.typicode.com/JoaoGoncalves/hrms-api/projects/${id}`);
    }

    getProjects() {
        return this.http.get<Project[]>(`https://my-json-server.typicode.com/JoaoGoncalves/hrms-api/projects`);
    }

    getProjectsByEmployeeId(employeeId: number) {
        return this.http.get<Project[]>(`https://my-json-server.typicode.com/JoaoGoncalves/hrms-api/projects?employees_like=${employeeId}`);
    }
  
}

import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../services/project-service';
import { AsyncPipe, NgFor } from '@angular/common';
import { ProjectCard } from '../../../shared/components/project-card/project-card';

@Component({
  selector: 'app-project-list',
  imports: [AsyncPipe, NgFor, ProjectCard],
templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList {
  private readonly projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
}

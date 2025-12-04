import { Component, inject, input, Input, numberAttribute, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../services/project-service';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Project } from '../../../infrastructure/types/project';
import { ProjectCard } from "../../../shared/components/project-card/project-card";
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project-details',
  imports: [ProjectCard],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {
  /* private readonly route = inject(ActivatedRoute); */
  //@Input({transform: numberAttribute}) id!: number;

  private readonly projectService = inject(ProjectService);
  //id = input(null, {transform: numberAttribute})
  id = input.required({transform: numberAttribute})

  project = toSignal(
    toObservable(this.id).pipe(
      switchMap( id => this.projectService.getProject(id))
    )
  )

  //project$!: Observable<Project>;

  /* ngOnChanges(changes: SimpleChanges): void {
   if(changes['id']){
    this.project$ = this.projectService.getProject(this.id)
   }
    
  } */


  /* destroy$ = new Subject<void>(); */

  /* ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$),
    ).subscribe((params) => {
      this.project$ = this.projectService.getProject(
        +params.get('id')!,
      );
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  } */
}

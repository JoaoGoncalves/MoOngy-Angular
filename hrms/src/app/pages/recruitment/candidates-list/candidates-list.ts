import { Component, inject } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { createSearch } from '../../../shared/functions/create-search';

@Component({
  selector: 'app-candidates-list',
  imports: [ReactiveFormsModule, AsyncPipe, NgFor, RouterLink],
  templateUrl: './candidates-list.html',
  styleUrl: './candidates-list.css'
})
export class CandidatesList {

  private readonly candidateService = inject(CandidateService);
  candidates$ = this.candidateService.getCandidates();
  /* destroy$ = new Subject<void>(); */

  searchControl = new FormControl('');
  search$ = createSearch(this.searchControl);
  /* search$ = this.searchControl.valueChanges.pipe(
    debounceTime(500),
    takeUntil(this.destroy$)
  ) */

  ngOnInit(): void {
    this.search$.subscribe( value => {
      if(value) {
        this.candidates$ = this.candidateService.getCandidatesByName(value)
      } else {
        this.candidates$ = this.candidateService.getCandidates()
      }
    })
    
  }
  
  /* ngOnDestroy(): void {
   this.destroy$.next();
  } */

}

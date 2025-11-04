import { Routes } from '@angular/router';
import { CandidatesList } from './candidates-list/candidates-list';
import { CandidateDetails } from './candidate-details/candidate-details';
import { candidateDetailsResolver } from '../../shared/resolvers/candidate-details.resolver';



export const routes: Routes = [
    { path: '', redirectTo: 'candidates', pathMatch: 'full' },
    { path: 'candidates', pathMatch: 'full', component: CandidatesList },
    { path: 'candidates/:id', component: CandidateDetails, resolve: { candidate: candidateDetailsResolver } },
];

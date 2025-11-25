import { inject, Injectable, signal } from '@angular/core';
import { TimeOffRequestService } from './time-off-request-service';
import { Subject } from 'rxjs';
import { TimeOffRequest } from '../infrastructure/types/time-off-request.type';

@Injectable({
  providedIn: 'root'
})
export class TimeOffManagementService {

  private readonly timeOffRequestService = inject(TimeOffRequestService);

  deleteRequest$ = new Subject<TimeOffRequest>();
  approveRequest$ = new Subject<TimeOffRequest>();
  rejectRequest$ = new Subject<TimeOffRequest>();

  selectedType = signal<
    'Vacation' | 'Sick Leave' | 'Maternity Leave' | 'Paternity Leave' | 'Other' | ''
  >((localStorage.getItem('selectedType') as any) ?? '');

  /* requests = signal(

  ) */

  
}

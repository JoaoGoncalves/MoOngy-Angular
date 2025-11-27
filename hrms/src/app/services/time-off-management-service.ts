import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { TimeOffRequestService } from './time-off-request-service';
import { merge, Subject, switchMap } from 'rxjs';
import { TimeOffRequest } from '../infrastructure/types/time-off-request.type';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TimeOffManagementService {
  private readonly timeOffRequestService = inject(TimeOffRequestService);

  deleteRequest$ = new Subject<TimeOffRequest>();
  approveRequest$ = new Subject<TimeOffRequest>();
  rejectRequest$ = new Subject<TimeOffRequest>();

  selectedType = signal<
    'Vacation' | 'Sick Leave' | 'Maternity Leave' | 'Paternity Leave' | 'Other' | ''
  >((localStorage.getItem('selectedType') as any) ?? '');

  requests = toSignal(
    merge(
      toObservable(this.selectedType),
      this.deleteRequest$.pipe(
        //! quando houve. um next de delete
        switchMap((r) => this.timeOffRequestService.deleteRequest(r.id))
      ),
      this.approveRequest$.pipe(
        //! quando houve. um next de approve
        switchMap((r) => this.timeOffRequestService.approveRequest(r.id))
      ),
      this.rejectRequest$.pipe(
        //! quando houve. um next de reject
        switchMap((r) => this.timeOffRequestService.rejectRequest(r.id))
      )
    ).pipe(
      switchMap(() => {
        return this.timeOffRequestService.getRequestsByType(this.selectedType());
      })
    ),
    {
      initialValue: [] as TimeOffRequest[],
    }
  );

  constructor() {
    effect(() => {
      localStorage.setItem('selectedType', this.selectedType());
    });
  }

  resolvedRequests = computed(() =>
    this.requests().filter((r) => r.status !== 'Pending')
  );

  filteredRequests = computed(() => {
    const type = this.selectedType();
    return this.requests().filter((r) => (type ? r.type === type : true));
  });

  deleteRequest(request: TimeOffRequest) {
    this.deleteRequest$.next(request);
  }
  approveRequest(request: TimeOffRequest) {
    this.approveRequest$.next(request);
  }
  rejectRequest(request: TimeOffRequest) {
    this.rejectRequest$.next(request);
  }
}

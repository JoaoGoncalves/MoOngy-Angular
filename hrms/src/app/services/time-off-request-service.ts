import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TimeOffRequest } from '../infrastructure/types/time-off-request.type';

@Injectable({
  providedIn: 'root'
})
export class TimeOffRequestService {
  private readonly http = inject(HttpClient);

  getRequests(query = '') {
    return this.http.get<TimeOffRequest[]>('/timeOffRequests');
  }

  getRequestsByType(query = '') {
    return this.http.get<TimeOffRequest[]>('/timeOffRequests').pipe(
        map((requests) => {
            return query === ''
              ? requests
              : requests.filter((r) => r.type === query);
        }),
    );
  }

  rejectRequest(id: number) {
    return this.http.patch(`/timeOffRequests/${id}`, { status: 'Rejected' });
  }

  approveRequest(id: number) {
    return this.http.patch(`/timeOffRequests/${id}`, { status: 'Approved' });
  }

  deleteRequest(id: number) {
    return this.http.delete(`/timeOffRequests/${id}`);
  }
}

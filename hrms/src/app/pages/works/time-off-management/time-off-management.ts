import { Component, computed, effect, inject, signal } from '@angular/core';
import { TimeOffRequest } from '../../../infrastructure/types/time-off-request.type';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeOffRequestService } from '../../../services/time-off-request-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-time-off-management',
  imports: [DatePipe, NgFor, NgIf, FormsModule],
  templateUrl: './time-off-management.html',
  styleUrl: './time-off-management.css',
})
export class TimeOffManagement {
  private readonly timeOffRequestService = inject(TimeOffRequestService);
  requests = toSignal(this.timeOffRequestService.getRequests(), {initialValue: []})


  constructor() {

    effect(() => {
      localStorage.setItem('selectedType', this.selectedType());
    });
  }


  resolvedRequests = computed(() => this.requests().filter((r) => r.status !== 'Pending'));

  selectedType = signal<
    'Vacation' | 'Sick Leave' | 'Maternity Leave' | 'Paternity Leave' | 'Other' | ''
  >((localStorage.getItem('selectedType') as any) ?? '');

  filteredRequests = computed(() => {
    const type = this.selectedType();
    return this.requests().filter((r) => (type ? r.type === type : true));
  });

  approveRequest(request: TimeOffRequest) {
    /* this.requests.update((requests) => {
      const index = requests.findIndex((r) => r.id === request.id);
      return requests.map((item, i) => (i === index ? { ...item, status: 'Approved' } : item));
    }); */
  }

  rejectRequest(request: TimeOffRequest) {
    /* this.requests.update((requests) => {
      const index = requests.findIndex((r) => r.id === request.id);
      return requests.map((item, i) => (i === index ? { ...item, status: 'Rejected' } : item));
    }); */
  }

  deleteRequest(request: TimeOffRequest) {
    //this.requests.update((requests) => requests.filter((r) => r.id !== request.id));
  }
}

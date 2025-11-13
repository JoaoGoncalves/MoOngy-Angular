import { Component, computed, effect, signal } from '@angular/core';
import { TimeOffRequest } from '../../../infrastructure/types/time-off-request.type';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-off-management',
  imports: [DatePipe, NgFor, NgIf, FormsModule],
  templateUrl: './time-off-management.html',
  styleUrl: './time-off-management.css',
})
export class TimeOffManagement {
  constructor() {
    // 1 effect
    /* const count = signal (10);
    const increment = () => count.update( v => v + 1);

    increment();
    increment();

    effect(() => {
      console.log(`count : `, count());
    }) */

    effect(() => {
      localStorage.setItem('selectedType', this.selectedType());
    });
  }

  requests = signal<TimeOffRequest[]>([
    {
      id: 1,
      employeeId: 1,
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      type: 'Vacation',
      status: 'Pending',
    },
    {
      id: 2,
      employeeId: 2,
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      type: 'Sick Leave',
      status: 'Approved',
      comment: 'Feeling pretty sick today :(',
    },
  ]);

  resolvedRequests = computed(() => this.requests().filter((r) => r.status !== 'Pending'));

  selectedType = signal<
    'Vacation' | 'Sick Leave' | 'Maternity Leave' | 'Paternity Leave' | 'Other' | ''
  >((localStorage.getItem('selectedType') as any) ?? '');

  filteredRequests = computed(() => {
    const type = this.selectedType();
    return this.requests().filter((r) => (type ? r.type === type : true));
  });

  approveRequest(request: TimeOffRequest) {
    this.requests.update((requests) => {
      const index = requests.findIndex((r) => r.id === request.id);
      return requests.map((item, i) => (i === index ? { ...item, status: 'Approved' } : item));
    });
  }

  rejectRequest(request: TimeOffRequest) {
    this.requests.update((requests) => {
      const index = requests.findIndex((r) => r.id === request.id);
      return requests.map((item, i) => (i === index ? { ...item, status: 'Rejected' } : item));
    });
  }

  deleteRequest(request: TimeOffRequest) {
    this.requests.update((requests) => requests.filter((r) => r.id !== request.id));
  }
}

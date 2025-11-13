import { Component, signal } from '@angular/core';
import { TimeOffRequest } from '../../../infrastructure/types/time-off-request.type';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-time-off-management',
  imports: [DatePipe, NgFor, NgIf],
  templateUrl: './time-off-management.html',
  styleUrl: './time-off-management.css'
})
export class TimeOffManagement {

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

approveRequest(request: TimeOffRequest) {
    this.requests.update((requests) => {
      const index = requests.findIndex((r) => r.id === request.id);
      return requests.map((item, i) =>
        i === index ? { ...item, status: 'Approved' } : item
      );
    });
  }

  rejectRequest(request: TimeOffRequest) {
    this.requests.update((requests) => {
      const index = requests.findIndex((r) => r.id === request.id);
      return requests.map((item, i) =>
        i === index ? { ...item, status: 'Rejected' } : item
      );
    });
  }

  deleteRequest(request: TimeOffRequest) {
    this.requests.update((requests) =>
      requests.filter((r) => r.id !== request.id)
    );
  }
}


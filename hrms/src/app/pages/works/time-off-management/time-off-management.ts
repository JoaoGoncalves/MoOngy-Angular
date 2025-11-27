import { Component, computed, effect, inject, signal } from '@angular/core';
import { TimeOffRequest } from '../../../infrastructure/types/time-off-request.type';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeOffRequestService } from '../../../services/time-off-request-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TimeOffManagementService } from '../../../services/time-off-management-service';

@Component({
  selector: 'app-time-off-management',
  imports: [DatePipe, NgFor, NgIf, FormsModule],
  templateUrl: './time-off-management.html',
  styleUrl: './time-off-management.css',
})
export class TimeOffManagement {
  private readonly timeofManagementService = inject(TimeOffManagementService)
  requests = this.timeofManagementService.requests;
  resolvedRequests = this.timeofManagementService.resolvedRequests;
  filteredRequests = this.timeofManagementService.filteredRequests;
  selectedType = this.timeofManagementService.selectedType;


  approveRequest(request: TimeOffRequest) {
    this.timeofManagementService.approveRequest(request)
  }

  rejectRequest(request: TimeOffRequest) {
    this.timeofManagementService.rejectRequest(request)
  }

  deleteRequest(request: TimeOffRequest) {
    this.timeofManagementService.deleteRequest(request)
  }
}

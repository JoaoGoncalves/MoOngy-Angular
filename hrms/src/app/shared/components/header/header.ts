import { Component, inject, signal } from '@angular/core';
import { NotificationService } from '../../../services/notification-service';
import { Notification } from '../../../infrastructure/types/notification';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgIf, NgFor],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private readonly notificationService = inject(NotificationService);

  notifications = this.notificationService.notifications;
  unreadNotifications = this.notificationService.unReadNotifications;

  notificationsOpen = signal(false);

  markNotificationAsRead(notification: Notification){
    this.notificationService.markAsRead(notification);
  }
}

import { Injectable } from '@angular/core';
import { interval, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  //notifications$ = interval(5000).pipe(map(  ()=> [] ), tap( ()=>console.log('Notification Emited')))

  notifications$ = interval(10_000).pipe(
    map((i) => {
      return {
        id: i,
        title: `Notification #${i}`,
        message: `Message ${i}`,
        type: 'Other' as const,
        read: false,
        date: new Date().toISOString(),
      };
    }),
    tap(() => console.log(' NOTIFICATION EMITTED'))
  );


  
}

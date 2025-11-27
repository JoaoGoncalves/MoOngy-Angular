import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authInterceptor } from './shared/interceptors/auth-interceptor';
import { TruncateLimit } from './shared/directives/truncate';
import { apiUrlInterceptor } from './shared/interceptors/api-url-interceptor';
import { CONSTANTS } from './shared/contants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    /* importProvidersFrom(HttpClientModule), */
    provideHttpClient(
      withInterceptors([authInterceptor, apiUrlInterceptor]),
    ),
    {provide: TruncateLimit, useValue: 50},
    {
      provide: CONSTANTS,
      useValue: {
        /* apiUrl: 'https://my-json-server.typicode.com/JoaoGoncalves/hrms-api', */
        apiUrl: 'http://localhost:3000',
      }
    }
  ]
};

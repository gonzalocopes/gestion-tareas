import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule aquí

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    AppRoutingModule,  // Usa AppRoutingModule aquí en lugar de 'provideRouter'
    provideAnimationsAsync(),
    provideHttpClient(),
  ]
};

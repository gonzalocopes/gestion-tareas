import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';  // Importa el módulo de rutas

// Se mantiene la configuración de rutas en main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      { path: 'welcome', loadComponent: () => import('./app/welcome/welcome.component').then(m => m.WelcomeComponent) },
      { path: 'register', loadComponent: () => import('./app/register/register.component').then(m => m.RegisterComponent) },
      { path: 'login', loadComponent: () => import('./app/login/login.component').then(m => m.LoginComponent) },
      { path: 'create-project', loadComponent: () => import('./app/create-project/create-project.component').then(m => m.CreateProjectComponent) },
      { path: '**', redirectTo: '/welcome' },
    ]),
    // Asegúrate de que se use el AppRoutingModule
    AppRoutingModule,
  ],
}).catch((err) => console.error(err));

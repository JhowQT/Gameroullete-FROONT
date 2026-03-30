import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/features/auth/login/login.component';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';

bootstrapApplication(LoginComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
});

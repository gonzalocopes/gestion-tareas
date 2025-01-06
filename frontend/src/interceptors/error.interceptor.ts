import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';  // Asegúrate de tener instalada la librería ngx-toastr

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Si el error es un error de autenticación (por ejemplo, sesión expirada)
          this.toastr.error('Sesión expirada, por favor inicie sesión nuevamente');
        } else if (error.status === 500) {
          // Si el error es un error interno del servidor
          this.toastr.error('Error interno del servidor');
        } else {
          // Para otros errores
          this.toastr.error('Ocurrió un error, por favor intente nuevamente');
        }
        throw error;  // Lanza el error para que sea gestionado en otros lugares si es necesario
      })
    );
  }
}

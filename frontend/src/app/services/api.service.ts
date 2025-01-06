import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api/auth'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Registro de usuario
  register(email: string, password: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/register`, { email, password })
      .pipe(catchError(this.handleError));
  }

  // Inicio de sesión
  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/login`, { email, password })
      .pipe(catchError(this.handleError));
  }

  // Obtener datos protegidos
  getAuthData(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : '',
    });

    return this.http
      .get<any>('http://localhost:5000/api/protected-route', { headers })
      .pipe(catchError(this.handleError));
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Error del cliente o red
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // Error del servidor
      console.error(
        `Código de estado: ${error.status}, ` + `Cuerpo del error: ${error.error}`
      );
    }
    // Retorna un observable con un mensaje de error personalizado
    return throwError(() => new Error('Ocurrió un error; por favor, intenta nuevamente.'));
  }
}

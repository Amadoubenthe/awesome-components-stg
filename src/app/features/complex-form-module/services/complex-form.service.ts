import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComplexFormValue } from '../models/complex-form-value.model';
import { Observable, catchError, delay, map, mapTo, of } from 'rxjs';

@Injectable()
export class ComplexFormService {
  apiUrl: string = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}

  saveUserInfo(userInfo: ComplexFormValue): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/users`, userInfo).pipe(
      map(() => true),
      delay(1000),
      catchError(() => of(false).pipe(delay(1000)))
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTypeRequest(url: string) {
    return this.http.get<any>(`${this.baseUrl}${url}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postTypeRequest(url: string, payload: object) {
    return this.http
      .post<any>(`${this.baseUrl}${url}`, payload)
      .pipe(map((res: any) => res));
  }

  putTypeRequest(url: string, payload: object) {
    return this.http
      .put<any>(`${this.baseUrl}${url}`, payload)
      .pipe(map((res: any) => res));
  }
}

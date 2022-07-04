import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${url}`);
  }

  public post(url: string, payload: object, params = {}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}${url}`, payload, params);
  }

  public put(url: string, payload: object): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${url}`, payload);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get<any>(`${this.baseUrl}${url}`);
  }

  public post(url: string, payload: object) {
    return this.http.post<any>(`${this.baseUrl}${url}`, payload, {
      observe: 'response',
    });
  }

  public put(url: string, payload: object) {
    return this.http.put<any>(`${this.baseUrl}${url}`, payload);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseApi = environment.baseApiPath;

  constructor(private http: HttpClient) {}

  public getSocials (): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/social-networks`);
  }
}

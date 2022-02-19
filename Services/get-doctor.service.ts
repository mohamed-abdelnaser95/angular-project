import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDoctorService {
  baseURL: string = "http://localhost:3000/doctor"

  constructor(private http: HttpClient) { }

  gitInfo(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
  }
  deleteData(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${id}`)
  }
  adddata(data: any) {
    return this.http.post<any>(this.baseURL, data)
  }
  edite(id: any, data: any) {
    return this.http.patch<any>(`${this.baseURL}/${id}`, data)
  }
}

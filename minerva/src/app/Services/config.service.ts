import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Teacher } from '../Model/teacher';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
    
   }
   addTeacher(teacher:Teacher): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(teacher);
    console.log(body)
    return this.http.post(this.baseURL + 'teacher', body,{'headers':headers})
  }
  getTeachers(): Observable<Teacher[]> {
    console.log('getTeacher '+this.baseURL + 'teacher')
    return this.http.get<Teacher[]>(this.baseURL + 'teacher')
  }
   
}

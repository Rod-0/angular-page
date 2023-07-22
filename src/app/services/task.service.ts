import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../Task';

import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{ //using observable
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}

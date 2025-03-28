import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  getTasks(): Task[] {
    return [
      {
        id: 1,
        date: 'Mar, 5, 2025',
        title: 'Task 1',
        completed: false,
        description: 'Complete projects',
        time: '10:00 AM',
        priority_level: 'High',
        category: 'Work',
        progress_level: '50%',
      },
      {
        id: 2,
        date: 'Mar, 6, 2025',
        title: 'Task 2',
        completed: true,
        description: 'Vaccum the living room',
        time: '2:00 PM',
        priority_level: 'Medium',
        category: 'Personal',
        progress_level: '100%',
      },
    ];
  }
  constructor(private http: HttpClient) {}
}

import { Component } from '@angular/core';

import { Task } from '../task';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TasksServiceService) {
    this.tasks = this.taskService.getTasks();
  }
}

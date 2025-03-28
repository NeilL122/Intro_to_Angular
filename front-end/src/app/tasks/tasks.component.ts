import { Component } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
import { Task } from '../task';

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

import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  tasks: Task[] = [];
  isDeleteAllWarning: boolean = false;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getAllTasks();
  }

  toggleDone(task: Task) {
    task.done = !task.done;
    this.tasksService.saveTasksOnLocal();
  }

  deleteTask(task: Task, i: number) {
    this.tasksService.deleteTask(task, i);
  }

  onDeleteAll() {
    this.isDeleteAllWarning = true;
  }

  onConfirmDeleteAll() {
    this.tasksService.deleteAll();
    this.isDeleteAllWarning = false;
  }

  onCancelDeleteAll() {
    this.isDeleteAllWarning = false;
  }
}

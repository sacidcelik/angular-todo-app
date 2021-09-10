import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = this.localStorageService.getLocalStorage('tasks') ?? [];

  constructor(private localStorageService: LocalStorageService) {}

  getAllTasks() {
    return this.tasks;
  }

  addTask(newTask: string) {
    this.tasks.unshift({
      description: newTask,
      done: false,
    });
    this.localStorageService.setLocalStorage('tasks', this.tasks);
  }

  deleteTask(task: Task, i: number) {
    this.tasks.splice(i, 1);
    this.localStorageService.setLocalStorage('tasks', this.tasks);
  }

  deleteAll() {
    this.tasks.splice(0, this.tasks.length);
    this.localStorageService.setLocalStorage('tasks', this.tasks);
  }

  saveTasksOnLocal() {
    this.localStorageService.setLocalStorage('tasks', this.tasks);
  }
}

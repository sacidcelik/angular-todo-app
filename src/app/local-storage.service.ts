import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  tasks: Task[] = [];

  constructor() {}

  getLocalStorage(key: string): Task[] | null {
    const returnData: string | null = localStorage.getItem(key);
    if (returnData !== null) {
      return JSON.parse(returnData);
    }
    return null;
  }

  setLocalStorage(key: string, value: Task[]): void {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }
}

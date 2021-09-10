import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task = new Task('');
  @Output() taskClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteConfirmed: EventEmitter<void> = new EventEmitter();
  isDeleteWarning: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onTaskClicked() {
    this.taskClicked.emit();
  }

  onDeleteClicked(task: Task, event: MouseEvent) {
    event.stopPropagation();
    task.done ? this.onDeleteConfirmed() : (this.isDeleteWarning = true);
  }

  onDeleteConfirmed() {
    this.deleteConfirmed.emit();
  }

  onCancelDelete() {
    this.isDeleteWarning = false;
  }
}

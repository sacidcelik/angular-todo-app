import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  isError: boolean = false;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.tasksService.addTask(form.value.newTask);
      this.isError = false;
      form.reset();
    } else {
      this.isError = true;
    }
  }
}

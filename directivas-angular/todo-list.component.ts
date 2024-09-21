import { Component } from '@angular/core';
import { Task } from '../../../model';
import { DEFAULT_TASKS } from '../../../data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
toDo: Task[] = DEFAULT_TASKS;

handleDeleteTask = (id: number) => this.toDo = this.toDo.filter(item => item.id !== id);
}


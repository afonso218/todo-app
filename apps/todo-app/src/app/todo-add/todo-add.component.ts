import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  newTodoContent: string;

  constructor(private todoService: TodoService) {}

  addNewTodo() {
    if (this.newTodoContent !== '') {
      this.todoService.create(this.newTodoContent);
      this.newTodoContent = '';
    }
  }
}

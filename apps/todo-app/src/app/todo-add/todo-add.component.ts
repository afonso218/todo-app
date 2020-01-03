import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  newTodoContent: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addNewTodo() {
    if (this.newTodoContent !== '') {
      this.todoService.addTodo(this.newTodoContent);
      this.newTodoContent = '';
    }
  }
}

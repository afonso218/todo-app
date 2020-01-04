import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Subject } from 'rxjs';
import { Todo } from '@todo-app/api-interfaces';

@Component({
  selector: 'todo-app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  list: Todo[] = [];
  private $listener: Subject<Todo[]>;

  constructor(private todoService: TodoService) {
    this.$listener = this.todoService.getListener();
    this.$listener.subscribe((data: Todo[]) => {
      this.list = data;
    });
  }

  ngOnInit() {
    this.todoService.fetchAll();
  }

  onDelete(todo: Todo) {
    this.todoService.delete(todo.id);
  }

  ngOnDestroy(): void {
    this.$listener.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'todo-app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  list: TODO[] = [];
  $events: Subject<TODO[]>;

  constructor(private todoService: TodoService) {
    this.$events = this.todoService.getListSubject();
  }

  ngOnInit() {
    this.$events.subscribe((todos: TODO[]) => {
      this.list = todos;
    });
  }

  onDelete(todo: TODO) {
    console.log(todo.id);
    this.todoService.delete(todo.id);
  }

  ngOnDestroy() {
    this.$events.unsubscribe();
  }
}

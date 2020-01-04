import { Injectable } from '@nestjs/common';
import { Todo } from 'libs/api-interfaces/src/lib/todo.interface';

@Injectable()
export class TodoService {
  private id_counter: number;
  private todos: Todo[] = [
    { id: 1, content: 'Create a desktop app' },
    { id: 2, content: 'Create a web app' },
    { id: 3, content: 'Create a mobile app' }
  ];

  constructor() {
    this.id_counter = this.todos.length;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: Todo): Todo {
    this.id_counter++;
    todo.id = this.id_counter;
    this.todos.push(todo);
    return todo;
  }

  delete(id: number) {
    const index = this.todos.findIndex(t => t.id == id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    } else {
      throw Error('Id not found!');
    }
  }
}

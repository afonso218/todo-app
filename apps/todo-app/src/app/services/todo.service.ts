import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private nextID = 1;
  private list: TODO[] = [];
  $listSubject = new Subject<TODO[]>();

  private init_list: TODO[] = [
    { content: 'Create a desktop app' },
    { content: 'Create a web app' },
    { content: 'Create a mobile app' }
  ];

  constructor() {
    this.populateWithDummyTodos();
  }

  private populateWithDummyTodos() {
    this.init_list.forEach((item, index) => {
      setTimeout(() => {
        this.addTodo(item.content);
      }, 1000 * index);
    });
  }

  public getListSubject() {
    return this.$listSubject;
  }

  public addTodo(content: string) {
    const todo = { id: this.nextID, content: content };
    this.nextID += 1;
    this.list.push(todo);
    this.$listSubject.next([...this.list]);
  }

  public delete(id: number) {
    const index = this.list.findIndex(item => item.id === id);
    if (index !== -1) {
      this.list.splice(index, 1);
      this.$listSubject.next([...this.list]);
    }
  }
}

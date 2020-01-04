import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Todo } from 'libs/api-interfaces/src/lib/todo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private list: Todo[] = [];
  private API_URL: string = '/api/todo';
  private $listenerSubject = new Subject<Todo[]>();

  constructor(private readonly http: HttpClient) {}

  public create(content: string) {
    const todo: Todo = { content: content };
    return this.http.post<Todo>(this.API_URL, todo).subscribe(
      data => {
        this.list.push(data);
        this.$listenerSubject.next([...this.list]);
      },
      err => console.log('HTTP Error', err)
    );
  }

  public fetchAll() {
    this.http.get<Todo[]>(this.API_URL).subscribe(
      data => {
        this.list = data;
        this.$listenerSubject.next([...this.list]);
      },
      err => console.log('HTTP Error', err)
    );
  }

  public getById(id: number) {}

  public update(todo: Todo) {}

  public delete(id: number) {
    this.http.delete(`${this.API_URL}/${id}`).subscribe(
      () => {
        const index = this.list.findIndex(t => t.id == id);
        this.list.splice(index, 1);
        this.$listenerSubject.next([...this.list]);
      },
      err => console.log('HTTP Error', err)
    );
  }

  public getListener() {
    return this.$listenerSubject;
  }
}

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Todo } from '@todo-app/api-interfaces';

@Component({
  selector: 'todo-app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() notifyDelete = new EventEmitter<Todo>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg')
    );
    iconRegistry.addSvgIcon(
      'favorite',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/favorite.svg')
    );
  }

  onDelete() {
    this.notifyDelete.emit(this.todo);
  }
}

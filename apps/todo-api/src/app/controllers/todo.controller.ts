import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { Todo } from 'libs/api-interfaces/src/lib/todo.interface';
import { TodoService } from '../services/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo): Todo {
    console.log(todo);
    return this.todoService.create(todo);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}

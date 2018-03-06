import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { TodoService } from '../todo.service';
import { ITodoState } from '../store';
import * as t from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  constructor(private service: TodoService, private ngRedux: NgRedux<ITodoState>) {
    this.ngRedux.subscribe(() => {
      console.log(this.ngRedux.getState());
    })
  }

  addTodo(input) {
    if (!input.value) return;

    this.ngRedux.dispatch({ type: t.TODO_ADD, title: input.value });
    this.service.addTodo(input.value);

    input.value = '';
  }

  toggleTodo(todo) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: t.TODO_REMOVE, id: todo.id});
    this.service.removeTodo(todo);
  }
}

import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';

import { ITodoState } from '../store';
import * as t from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select((s: ITodoState) => s.todos) todos;

  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<ITodoState>) {
  }

  addTodo(input) {
    if (!input.value) return;

    this.ngRedux.dispatch({ type: t.TODO_ADD, title: input.value });

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: t.TODO_TOGGLE, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: t.TODO_REMOVE, id: todo.id });
  }
}

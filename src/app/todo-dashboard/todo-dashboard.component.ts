import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';

import { ITodoState } from '../store';
import * as t from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select((s: ITodoState) => s.todos.length) todos;
  @select((s: ITodoState) => s.lastUpdate) lastUpdate;

  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<ITodoState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({type: t.TODO_CLEAR_ALL});
  }
}

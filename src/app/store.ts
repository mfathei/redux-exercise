import { tassign } from 'tassign';

import * as t from './actions';

export interface ITodoTask {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface ITodoState {
    todos: ITodoTask[];
    lastUpdate: Date;
}

export const INITIAL_STATE: ITodoState = {
    todos: [],
    lastUpdate: new Date()
}

export const INITIAL_TODO_TASK: ITodoTask = {
    id: 1,
    title: '',
    isCompleted: false
}

export function todoRoducer(state: ITodoState, action): ITodoState {
    switch (action.type) {
        case t.TODO_ADD:
            var newTodoTask = tassign(INITIAL_TODO_TASK, { id: state.todos.length + 1, title: action.title });
            var newTodos = state.todos.concat(newTodoTask);
            return tassign(state, { todos: newTodos, lastUpdate: new Date() });
        case t.TODO_REMOVE:
            var newTodos = state.todos.filter(item => item.id !== action.id);
            return tassign(state, { todos: newTodos, lastUpdate: new Date() });
        case t.TODO_TOGGLE:
            var item = state.todos.find(v => v.id === action.id);
            var index = state.todos.indexOf(item);
            var todosBefore = state.todos.slice(0, index);
            var todosAfter = state.todos.slice(index + 1);
            var newTodo = tassign(item, { isCompleted: !item.isCompleted });
            var emptyArray: ITodoTask[] = [];
            var newTodos = emptyArray.concat(todosBefore).concat(newTodo).concat(todosAfter);
            return tassign(state, { todos: newTodos, lastUpdate: new Date() });
        case t.TODO_CLEAR_ALL:
            return tassign(state, { todos: [], lastUpdate: new Date() });
    }
    return state;
}

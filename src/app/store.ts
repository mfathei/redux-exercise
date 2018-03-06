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
    }
    return state;
}

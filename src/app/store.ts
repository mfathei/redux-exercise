
export interface ITodoState {
    id: number;
    title: string;
    isCompleted: boolean;
}

export const INITIAL_STATE: ITodoState = {
    id: 1,
    title: '',
    isCompleted: false
}

export function todoRoducer(state: ITodoState, action): ITodoState {
    return state;
}

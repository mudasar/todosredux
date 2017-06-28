import uuid from 'node-uuid';
import moment from 'moment';

const searchTextInitialState = '';
export const searchTextReducer = (state = searchTextInitialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state
    }
};

const showCompletedReducerInitialState = false;
export const showCompletedReducer = (state = showCompletedReducerInitialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state
    }
}

const todoRecuderInitialState = [];
export const todoRecuder = (state = todoRecuderInitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'UPDATE_TODO':
                var todos = state.map( (todo) => {
                    if (todo.id === action.id) {
                        return {...todo, ...action.updates};
                    }
                    return todo;
                });
             return todos;
        case 'ADD_TODOS':
            return [...state,...action.todos];
        default:
            return state
    }
};
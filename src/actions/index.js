import moment from 'moment';
import firebase, {firebaseRef, githubProvider, twitterProvider} from './../firebase';
import {history} from './../hisotry';

export var setSearchText = (searchText) => {
    return {type: 'SET_SEARCH_TEXT', searchText};
};

export var addTodo = (todo) => {
    return {type: 'ADD_TODO', todo};
};

export var toggleShowCompleted = () => {
    return {type: 'TOGGLE_SHOW_COMPLETED'};
};

export var updateTodo = (id, updates) => {
    return {type: 'UPDATE_TODO', id, updates};
};

export var addTodos = (todos) => {
    return {type: 'ADD_TODOS', todos}
};

export var clearStore = () => {
    return {type: 'CLAER_STORE'};
}

//Async methods
export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            isCompleted: false,
            createdAt: moment().unix()
        };

        var uid = getState().auth.uid;

        var todoRef = firebaseRef
            .child(`users/${uid}/todos`)
            .push(todo);
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }))
        });
    };
};

export var startUpdateTodo = (id, completed) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);

        var updates = {
            isCompleted: completed,
            completedAt: completed
                ? moment().unix()
                : null
        };
        return todoRef.update(updates, (err) => {
            dispatch(updateTodo(id, updates));
        });
    };
};

export var startAddTodos = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var todosRef = firebaseRef.child(`users/${uid}/todos`);
        return todosRef
            .once('value')
            .then((snapshot) => {
                var todos = snapshot.val() || {};

                var parsedTodos = [];
                Object
                    .keys(todos)
                    .forEach((todoId) => {
                        parsedTodos.push({
                            id: todoId,
                            ...todos[todoId]
                        });
                    });
                dispatch(addTodos(parsedTodos));
            });

    };
};

export var startLogin = () => {
    return (dispatch, getStae) => {
        return firebase
            .auth()
            .signInWithPopup(githubProvider)
            .then((result) => {
                console.log('Auth worked', result);
                
            }, (err) => {
                console.log('Auth Fialed', err);
            });
    };
};

export var startTwitterLogin = () => {
    return (dispatch, getStae) => {
        return firebase
            .auth()
            .signInWithPopup(twitterProvider)
            .then((result) => {
                console.log('Auth worked', result);
                
            }, (err) => {
                console.log('Auth Fialed', err);
            });
    };
};

export var startLogout = () => {
    return (dispatch, getStae) => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                console.log('Logged out');
                dispatch(clearStore());
                history.push('/');
            });
    };
};

export var login = (uid) =>  {
    return {type: 'LOGIN', uid};
};

export var logout = () => {
    return {type: 'LOGOUT'};
};

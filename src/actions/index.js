import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from './../firebase';

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

//Async methods
export var startAddTodo = (text) => {
    return (dispatch, getStae) => {
        var todo = {
            text,
            isCompleted: false,
            createdAt: moment().unix()
        };

        var todoRef = firebaseRef
            .child('todos')
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
        var todoRef = firebaseRef.child(`todos/${id}`);
        
        var updates = {
            isCompleted: completed,
            completedAt: completed ? moment().unix() : null
        };
        return todoRef.update(updates, (err) => {
            dispatch(updateTodo(id, updates));
        });
    };
};

export var startAddTodos = () => {
    return (dispatch, getState) => {
        var todosRef = firebaseRef.child('todos');
        return todosRef.once('value').then((snapshot) => {
            var todos = snapshot.val() || {};

            var parsedTodos = [];
            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({id:todoId, ...todos[todoId]});
            });
            dispatch(addTodos(parsedTodos));
        });

    };
};

export var startLogin = () => {
    return (dispatch, getStae) => {
        return firebase.auth().signInWithPopup(githubProvider).then( (result) => {
            console.log('Auth worked', result);
        }, (err)=>{
            console.log('Auth Fialed', err);
        });
    };
};

export var startLogout = () => {
    return (dispatch, getStae) => {
        return firebase.auth().signOut().then( () => {console.log('Logged out');});
    };
};
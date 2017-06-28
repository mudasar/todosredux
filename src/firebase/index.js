import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAmMy8AKZrJWr9kdDLCyCEuKw-LA13XfFo",
    authDomain: "reactive-todos.firebaseapp.com",
    databaseURL: "https://reactive-todos.firebaseio.com",
    projectId: "reactive-todos",
    storageBucket: "",
    messagingSenderId: "219725918285"
  };

  firebase.initializeApp(config);
  
  export var githubProvider = new firebase.auth.GithubAuthProvider();
  export var firebaseRef = firebase.database().ref();

  export default firebase;
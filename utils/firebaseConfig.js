import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAMhVMQnmjlDdBspmeJMc3skJKHm_uvx2M",
    authDomain: "reactnativetest-tienld235.firebaseapp.com",
    databaseURL: "https://reactnativetest-tienld235.firebaseio.com",
    projectId: "reactnativetest-tienld235",
    storageBucket: "reactnativetest-tienld235.appspot.com",
    messagingSenderId: "401879810532",
    appId: "1:401879810532:web:5bde7837ee9ff9f3"
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
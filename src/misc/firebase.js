import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCnTN7MDfm1SEr8zvexdVxv2jOLai_inGQ',
  authDomain: 'chat-app-86340.firebaseapp.com',
  databaseURL: 'https://chat-app-86340-default-rtdb.firebaseio.com',
  projectId: 'chat-app-86340',
  storageBucket: 'chat-app-86340.appspot.com',
  messagingSenderId: '539406205786',
  appId: '1:539406205786:web:63fcd49541fe7ca1c7e963',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

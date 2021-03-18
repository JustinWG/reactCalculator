import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCYvxVyWTPowTtA7LmSMguWE8XEbXuS3mY',
  authDomain: 'reactmathwithfriends.firebaseapp.com',
  databaseURL: 'https://reactmathwithfriends-default-rtdb.firebaseio.com/',
  projectId: 'reactmathwithfriends',
  storageBucket: 'reactmathwithfriends.appspot.com',
  messagingSenderId: '780938339240',
  appId: '1:780938339240:web:7719856163d9e3266f739d'
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a defulat export
export default base;

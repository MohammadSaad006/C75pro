import * as firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyDnaQftXpFgvvfxyto3qn4X4wQfWOJ1gGI",
  authDomain: "class35-c1de5.firebaseapp.com",
  databaseURL:"https://class35-c1de5.firebaseio.com",
  projectId: "class35-c1de5",
  storageBucket: "class35-c1de5.appspot.com",
  messagingSenderId: "513892294714",
  appId: "1:513892294714:web:8f268be5aad444066e9503"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
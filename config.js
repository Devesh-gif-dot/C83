import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAbEvSmcmtlkXcXIcBSbF_2AXIiuWYsFkk",
  authDomain: "booksanta-2f37a.firebaseapp.com",
  projectId: "booksanta-2f37a",
  storageBucket: "booksanta-2f37a.appspot.com",
  messagingSenderId: "485065641172",
  appId: "1:485065641172:web:ba7afcb7f4dbdadc67bf41"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

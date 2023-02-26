import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTaBZMFyWKK0Y3xmHRnFp5EkWKBhVEv94",
    authDomain: "vue-blog-de285.firebaseapp.com",
    projectId: "vue-blog-de285",
    storageBucket: "vue-blog-de285.appspot.com",
    messagingSenderId: "420552813488",
    appId: "1:420552813488:web:23a8620eb7b2d97db74475"
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export{ projectFirestore, timestamp }
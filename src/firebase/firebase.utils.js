import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBrzFmgY0C83qJphW4KzKq5swrtFkC9F80",
    authDomain: "crown-db-259d7.firebaseapp.com",
    databaseURL: "https://crown-db-259d7.firebaseio.com",
    projectId: "crown-db-259d7",
    storageBucket: "crown-db-259d7.appspot.com",
    messagingSenderId: "689377252881",
    appId: "1:689377252881:web:4f7db9c3bd39965278c3b0",
    measurementId: "G-T9XF39KWZ6"
  }

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
     
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase;
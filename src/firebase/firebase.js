import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuuDizQid_w9_CjCou67TgREsD5W5Wb1E",
    authDomain: "crshop-db.firebaseapp.com",
    projectId: "crshop-db",
    storageBucket: "crshop-db.appspot.com",
    messagingSenderId: "214099069980",
    appId: "1:214099069980:web:8e69e941fa2238312c63d9",
    measurementId: "G-W8LW65T704"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new  firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
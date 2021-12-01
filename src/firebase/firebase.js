
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPIID
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = () => {
    return firebase.firestore(firebaseApp);
}

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export { app, provider };
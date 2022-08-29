import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1AKFwDTK4ZEnsqrTkPbU6yHyvALK31AY",
    authDomain: "twitter-clone-70999.firebaseapp.com",
    projectId: "twitter-clone-70999",
    storageBucket: "twitter-clone-70999.appspot.com",
    messagingSenderId: "788196027160",
    appId: "1:788196027160:web:9ec547d7cf47f78d84cc6d",
    measurementId: "G-463WGCGWLW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

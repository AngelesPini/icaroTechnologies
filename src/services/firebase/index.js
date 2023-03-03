import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig= {
    apiKey:"AIzaSyDKTqK5Bd4algVtudg9Ix1UeEs7eGfJhKs",
    authDomain:"icarotech-b2fce.firebaseapp.com",
    projectId:"icarotech-b2fce",
    storageBucket:"icarotech-b2fce.appspot.com",
    messagingSenderId:"587862125043",
    appId:"1:587862125043:web:17bfbb5ad2d2f348c94a86"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
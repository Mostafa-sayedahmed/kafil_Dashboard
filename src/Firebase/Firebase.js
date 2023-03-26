
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByEnviX-FDw6MAqAt3DdFm5GTvXuKiwKE",
  authDomain: "kafiil-12b6c.firebaseapp.com",
  projectId: "kafiil-12b6c",
  storageBucket: "kafiil-12b6c.appspot.com",
  messagingSenderId: "894615157997",
  appId: "1:894615157997:web:9e5b2fc5d3f0c7ceb5a0e4",
  measurementId: "G-TXXLDM8EZ1"
};


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
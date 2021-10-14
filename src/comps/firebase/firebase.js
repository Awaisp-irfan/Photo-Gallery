import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdtKmafOrWqU8TbPjwDaKMG4Igigi5XNI",
  authDomain: "photo-gallery-9c723.firebaseapp.com",
  projectId: "photo-gallery-9c723",
  storageBucket: "photo-gallery-9c723.appspot.com",
  messagingSenderId: "173705488606",
  appId: "1:173705488606:web:cf5b5dc1373cdb5cfc3a4f"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const firestroage = firebase.storage()
const db = firebase.firestore()
export { firestroage,db}
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCnEVKYEDkxppu4dYzS_mrcC_TcTs8Dxj4",
  authDomain: "budgetlogin-61f3c.firebaseapp.com",
  projectId: "budgetlogin-61f3c",
  storageBucket: "budgetlogin-61f3c.appspot.com",
  messagingSenderId: "105179575526",
  appId: "1:105179575526:web:e5cc5b4fb7a7e026373727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app)
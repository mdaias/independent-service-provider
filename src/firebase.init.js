import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3Xxx4xZMMszyDjxoLKFE5hTZ6rvcioDk",
  authDomain: "independent-service-prov-9e03b.firebaseapp.com",
  projectId: "independent-service-prov-9e03b",
  storageBucket: "independent-service-prov-9e03b.appspot.com",
  messagingSenderId: "732113373046",
  appId: "1:732113373046:web:36009a1a4c413b60109c57"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
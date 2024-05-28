// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDrcxHVJm4z68P00Wg1-FSWlkvBzaL9wdw",
  authDomain: "friendfinder-2b16e.firebaseapp.com",
  projectId: "friendfinder-2b16e",
  storageBucket: "friendfinder-2b16e.appspot.com",
  messagingSenderId: "686039400325",
  appId: "1:686039400325:web:d6a428c77dc1fa6d428eec",
  measurementId: "G-GNGFS9Q9S6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

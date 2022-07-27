import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC4N6YiY5obJffPjitaN5BZWtwIemhXjQM',
  authDomain: 'dogs-8cdd1.firebaseapp.com',
  databaseURL: 'https://dogs-8cdd1-default-rtdb.firebaseio.com',
  projectId: 'dogs-8cdd1',
  storageBucket: 'dogs-8cdd1.appspot.com',
  messagingSenderId: '231327631432',
  appId: '1:231327631432:web:06ae6d056a07b215d9b07d',
  measurementId: 'G-J8TYP5SPD3',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db, auth };

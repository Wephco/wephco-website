import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	setDoc,
	deleteDoc,
	getDoc,
	getDocs,
	DocumentData,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyD_uQx2xyoKQJBeIRdQNUbH7CtvM7vHYtc',
	authDomain: 'wephco-website-417eb.firebaseapp.com',
	projectId: 'wephco-website-417eb',
	storageBucket: 'wephco-website-417eb.appspot.com',
	messagingSenderId: '1092640047441',
	appId: '1:1092640047441:web:2107c84f376883c2ff5370',
	measurementId: 'G-ZHMYMF9L96',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

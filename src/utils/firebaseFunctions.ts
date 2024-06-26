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

const firebaseDevConfig = {
	apiKey: 'AIzaSyAL9Rd6gcCl4X3YFZFFLXdEC0LwDFQVRPc',
	authDomain: 'wephco-756ab.firebaseapp.com',
	projectId: 'wephco-756ab',
	storageBucket: 'wephco-756ab.appspot.com',
	messagingSenderId: '821089090231',
	appId: '1:821089090231:web:007d708a1fc069aebdeb32',
	measurementId: 'G-Z2DWB44KPZ',
};

const firebaseProdConfig = {
	apiKey: 'AIzaSyD_uQx2xyoKQJBeIRdQNUbH7CtvM7vHYtc',
	authDomain: 'wephco-website-417eb.firebaseapp.com',
	projectId: 'wephco-website-417eb',
	storageBucket: 'wephco-website-417eb.appspot.com',
	messagingSenderId: '1092640047441',
	appId: '1:1092640047441:web:2107c84f376883c2ff5370',
	measurementId: 'G-ZHMYMF9L96',
};

const firebaseConfig = import.meta.env.DEV ? firebaseDevConfig : firebaseProdConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);

const addDocument = async (collectionName: string, data: Object) => {
	const docRef = await addDoc(collection(db, collectionName), { data });
	return docRef.id;
};

const getAllDocuments = async (collectionName: string) => {
	var documents: DocumentData[] = [];
	const querySnapshot = await getDocs(collection(db, collectionName));
	querySnapshot.forEach((doc) => {
		documents.push(doc.data());
	});
	return documents;
};

const getADocument = async (collectionName: string, documentId: string) => {
	const docRef = doc(db, collectionName, documentId);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		return null;
	}
};

const updateDocument = async (collectionName: string, data: Object, documentId: string) => {
	await setDoc(doc(db, collectionName, documentId), data);
};

const deleteDocument = async (collectionName: string, documentId: string) => {
	await deleteDoc(doc(db, collectionName, documentId));
};

export { addDocument, getAllDocuments, getADocument, updateDocument, deleteDocument, storage };

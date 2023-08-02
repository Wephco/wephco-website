import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc, deleteDoc, getDoc, getDocs } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD_uQx2xyoKQJBeIRdQNUbH7CtvM7vHYtc",
  authDomain: "wephco-website-417eb.firebaseapp.com",
  projectId: "wephco-website-417eb",
  storageBucket: "wephco-website-417eb.appspot.com",
  messagingSenderId: "1092640047441",
  appId: "1:1092640047441:web:2107c84f376883c2ff5370",
  measurementId: "G-ZHMYMF9L96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);


const addDocument = async (collectionName: string, data: Object) => {
  const docRef = await addDoc(collection(db, collectionName), { data })
  return docRef.id
}

const getAllDocuments = async (collectionName: string) => {
  var documents: any[] = []
  const querySnapshot = await getDocs(collection(db, collectionName))
  querySnapshot.forEach((doc) => {
    documents.push(doc.data())
  })
  return documents;
}

const getADocument = async (collectionName: string, documentId: string) => {
  const docRef = doc(db, collectionName, documentId)
  const docSnap = await getDoc(docRef)

  if(docSnap.exists()){
    return docSnap.data()
  } else {
    return null
  }
}

const updateDocument = async (collectionName: string, data: Object, documentId: string) => {
  await setDoc(doc(db, collectionName, documentId), data)
}

const deleteDocument = async (collectionName: string, documentId: string) => {
  await deleteDoc(doc(db, collectionName, documentId))
}

const createUser = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password)
  return user;
}

const loginUser = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password)
  return user;
}

const logoutUser = async () => {
  await signOut(auth);
}

export { addDocument, getAllDocuments, getADocument, updateDocument, deleteDocument, storage, createUser, loginUser, logoutUser }
import firebase from 'firebase'
import 'firebase/storage'


const firebaseConfig =  {
  apiKey: "AIzaSyA2W7TH30Ib5sil-pZArahprR52m5trnv0",
  authDomain: "mchatapp-ae5be.firebaseapp.com",
  projectId: "mchatapp-ae5be",
  storageBucket: "mchatapp-ae5be.appspot.com",
  messagingSenderId: "389045365818",
  appId: "1:389045365818:web:cc522e9147d3a25a6cd903",
  measurementId: "G-DH4Y28L6M3"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const Database = firebaseApp.firestore()

export const auth = firebase.auth();
export const storage = firebase.storage()

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const usersRef = Database.collection('users');
  const userRef = usersRef.doc(userAuth.uid)
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      if (additionalData) {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      });
    }
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export default Database;

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCHusAuxG5B5Z_UKzFHmXIuMDA8QoTNOdM',
	authDomain: 'nomad-bages-store.firebaseapp.com',
	projectId: 'nomad-bages-store',
	storageBucket: 'nomad-bages-store.appspot.com',
	messagingSenderId: '961487753828',
	appId: '1:961487753828:web:14884fb0ae935d5e7ec571',
};

initializeApp(firebaseConfig);

const firestore = getFirestore();
const auth = getAuth();

async function createUserProfileDocument(userAuth, additionalData) {
	if (!userAuth) {
		return;
	}
	const userRef = doc(firestore, 'users', userAuth.uid);
	const user = await getDoc(userRef);
	if (!user.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
}

export { firestore, auth, createUserProfileDocument };

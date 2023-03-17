import React, { useEffect, createContext, useState } from 'react';
import { createUserProfileDocument, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				onSnapshot(userRef, async (doc) => {
					setUser({
						id: doc.id,
						...doc.data(),
					});
					setLoading(false);
				});
			} else {
				setUser(userAuth);
				setLoading(false);
			}
		});
		return () => unsubscribeFromAuth();
	}, []);
	const userContext = {
		user,
		loading,
	};
	if (loading) {
		return <div>Loading ...</div>;
	}
	return (
		<UserContext.Provider value={userContext}>{children}</UserContext.Provider>
	);
}

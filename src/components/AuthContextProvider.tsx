import { createContext, ReactNode, useEffect, useState } from "react";
import firebase from "firebase";
import { auth } from "../services/firebase";

type UserType = {
	id: string;
	name: string;
	avatar: string;
};

type AuthContextType = {
	user: UserType | undefined;
	signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderPropsType = {
	children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({
	children,
}: AuthContextProviderPropsType) => {
	const [user, setUser] = useState<UserType>();

	const signInWithGoogle = async () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		const result = await auth.signInWithPopup(provider);
		if (result.user) {
			const { displayName, photoURL, uid } = result.user;

			if (!displayName || !photoURL)
				throw new Error("Missing information from Google Account.");

			setUser({
				id: uid,
				name: displayName,
				avatar: photoURL,
			});
		}
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				const { displayName, photoURL, uid } = user;

				if (!displayName || !photoURL)
					throw new Error("Missing information from Google Account.");

				setUser({
					id: uid,
					name: displayName,
					avatar: photoURL,
				});
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle }}>
			{children}
		</AuthContext.Provider>
	);
};

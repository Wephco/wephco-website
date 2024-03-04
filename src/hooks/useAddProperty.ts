// useAddProperty hook
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebaseFunctions';

export const useAddProperty = () => {
	let adminCollectionRef = collection(db, 'property-request');

	const addProperty = async ({
		name,
		email,
		location,
		propertyType,
		budget,
		serviceType,
	}: {
		name: string;
		email: string;
		location: string;
		propertyType: string;
		budget: string;
		serviceType: string;
	}) => {
		await addDoc(adminCollectionRef, {
			name,
			email,
			location,
			propertyType,
			budget,
			serviceType,
			createdAt: serverTimestamp(),
		});
	};

	return { addProperty };
};

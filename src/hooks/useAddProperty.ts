// useAddProperty hook
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebaseFunctions';
import { IPropertyRequest } from '../interfaces/PropertyRequestInterface';

export const useAddProperty = () => {
	let adminCollectionRef = collection(db, 'leads');

	const addProperty = async ({
		name,
		email,
		phone,
		location,
		propertyType,
		budget,
		serviceType,
		dateOfRequest,
	}: IPropertyRequest) => {
		await addDoc(adminCollectionRef, {
			name,
			email,
			phone,
			location,
			propertyType,
			budget,
			serviceType,
			dateOfRequest,
			createdAt: serverTimestamp(),
		});
	};

	return { addProperty };
};

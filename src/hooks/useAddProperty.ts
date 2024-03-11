// useAddProperty hook
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebaseFunctions';
import { IPropertyRequest } from '../interfaces/PropertyRequestInterface';

export const useAddProperty = () => {
	let adminCollectionRef = collection(db, 'leads');

	const addProperty = async ({
		name,
		email,
		location,
		propertyType,
		budget,
		serviceType,
	}: IPropertyRequest) => {
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
